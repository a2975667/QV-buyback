import json
import json.decoder
import os
import random
import uuid
from pprint import pprint
from sys import exit

import requests
from flask import Flask, abort, jsonify, request, current_app, send_from_directory, Response, stream_with_context
from flask_cors import CORS
from datetime import datetime
from server import app, db
from server.utils import decide_path
from bson.objectid import ObjectId


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

@app.route('/welcome/<string:gp>')
def root(gp):
	print("Welcome")
	return app.send_static_file('index.html')


@app.route('/qv')
@app.route('/likert')
@app.route('/complete')
@app.route('/demographic')
@app.route('/video')
def root1():
	return app.send_static_file('index.html')


@app.route('/createUser', methods=['POST'])
def welcome():
	""" Once the user decides to move on, create a user and nsave to database.
	return database object id as user id, flow.
	"""
	print("Welcome")
	gp = request.json["gp"]

	user = {
		"userid": "",
		"create_time": datetime.utcnow(),
		"complete_flag": False,
		"attention": True,
		"path_id": "",
		"gp": gp
	}

	userid = db.user.insert_one(user).inserted_id
	path_id, newpath = decide_path(gp)

	print(newpath)

	# update user path
	user["path"] = newpath
	user["path_id"] = path_id
	user["userid"] = userid

	# update user path
	if path_id != "thank_you":
		user["qualify"] = True

		db.user.update_one({
			'_id': userid
		}, {
			'$set': user
		}, upsert=False)

	else:
		user["complete_flag"] = True
		user["qualify"] = False
		db.user.update_one({
			'_id': userid
		}, {
			'$set': user
		}, upsert=False)

		return jsonify(user), 200

	return jsonify(user), 200


@app.route('/api/disqualify', methods=['POST'])
def disqualify():
	user = request.json
	gp = user['gp']
	user_id = user['userid']
	user_path_id = user['pathId']
	user["qualify"] = False
	user["complete_flag"] = True
	user["attention"] = False
	print("Disquality:", user)
	gp_status = db.gp_status.find({"gp": gp})[0]
	gp_status["count"][(int(user_path_id[1]))-1]["count"] -= 1
	db.gp_status.find_one_and_replace({"gp": gp}, gp_status)

	final = db.user.update_one({
		'_id': ObjectId(user["userid"])
	}, {
		'$set': user
	}, upsert=False)

	return jsonify({'ok': True}), 200

@app.route('/submit', methods=['POST'])
def submit():
	"""generic submit json to db
	the json needs to specify where this json needs to go
	"""
	print("Source:", request.json)
	insert_data = request.json
	source = "data"
	try:
		if "submitData" in insert_data:
			source = insert_data["submitData"]["file_name"]
		# elif "data" in insert_data:
		#	 if "vet1" in insert_data["data"]:
		#		 source = "ve_test"
		elif "fileName" in insert_data:
			if "file" in insert_data["fileName"]:
				source = insert_data["fileName"]["file"]
			else:
				source = "issue"
			# if insert_data["fileName"]["type"] == 'qv':
			#	 if insert_data["fileName"]["file"] == 'example':
			#		 source = "qv_test"
			#	 else:
			#		 source = "qv"
		elif "jsonFile" in insert_data:
			source = "video_test"
	except:
		print("source not identified")

	insert_data['time'] = datetime.utcnow()
	db[source].insert_one(insert_data)

	return jsonify({'ok': True}), 200

# donation
@app.route('/api/demographic')
def demographic():
	""" returns the list of donation orgs
	"""

	filename = '/'.join(['data', 'demographic.json'])

	with current_app.open_resource(filename) as f:
		return json.loads(f.read().decode('utf-8'))


# thanks
@app.route('/thank_you/<string:file_name>')
def thanks(file_name):
	""" returns the json file appropriate to the question set it wants to generate
	"""

	file_name = '/'.join(['data', file_name])
	filename = file_name+'.json'

	with current_app.open_resource(filename) as f:
		return json.loads(f.read().decode('utf-8'))


@app.route('/submit-demographic', methods=['POST'])
def submit_demographic():
	"""submit donation to db"""

	print(request.json)
	insert_data = request.json
	insert_data['time'] = datetime.utcnow()
	db.demographic.insert_one(insert_data)
	return jsonify({'ok': True}), 200


@app.route('/submit-video-setting', methods=['POST'])
def submit_video_setting():
	"""submit video setting to db"""

	print(request.json)
	insert_data = request.json
	insert_data['video_setting'] = datetime.utcnow()
	source = insert_data["fileName"]["file"]
	db[source].insert_one(insert_data)
	return jsonify({'ok': True}), 200

@app.route('/submit-design', methods=['POST'])
def submit_design():
	"""submit video design"""

	print(request.json)
	insert_data = request.json
	insert_data['time'] = datetime.utcnow()
	db.design.insert_one(insert_data)
	return jsonify({'ok': True}), 200

# qv
@app.route('/api/qv/<string:file_name>')
def show_subpath(file_name):
	""" returns the json file appropriate to the question set it wants to generate
	"""

	file_name = '/'.join(['data', file_name])
	filename = file_name+'.json'

	with current_app.open_resource(filename) as f:
		return json.loads(f.read().decode('utf-8'))


@app.route('/complete')
def complete():
	return request.json["userid"]


@app.route('/download/debrief', methods=['GET'])
def download(filename='debrief.pdf'):
	return send_from_directory('data', filename)
	# return app.send_static_file('debreif.pdf')


@app.route('/download/consent', methods=['GET'])
def download2(filename='consent.pdf'):
	return send_from_directory('data', filename)
	# return app.send_static_file('debreif.pdf')


@app.route('/api/video/<filename>', methods=['GET'])
def play(filename):
	userId = request.args.get('userId')
	if userId: app.logger.info("[FLAG] " + str(userId) + " " + filename)
	return send_from_directory("video", filename)


@app.route('/api/audio/<filename>', methods=['GET'])
def play_audio(filename):
	userId = request.args.get('userId')
	if userId: print("[FLAG] " + str(userId) + " " + filename)
	return send_from_directory("audio", filename)

@app.route('/api/image/<filename>', methods=['GET'])
def get_image(filename):
	# userId = request.args.get('userId')
	# if userId: print("[FLAG] " + str(userId) + " " + filename)
	return send_from_directory("image", filename)


@app.route('/admin/setup_buyback_db')
def setup_route_db():
	"""comment out for production"""
	db["gp_status"].drop()
	db["user"].drop()
	db["demographic"].drop()
	db["video_playground"].drop()
	db["video_checkbox_with_price"].drop()
	db["video_checkbox"].drop()
	db["likert"].drop()
	db["example"].drop()
	db["pr-freeform"].drop()
	db["task_intro_designer_pt1"].drop()
	db["task_intro_designer_pt2"].drop()
	db["qv_test"].drop()
	db["test_qv"].drop()
	db["ve_test"].drop()
	db["video_likert"].drop()
	db["test_video_element"].drop()
	db["video_element"].drop()
	db["background"].drop()
	db["pilot_demo"].drop()
	db["preference"].drop()
	db["qv_108"].drop()
	db["task_into_designer"].drop()

	list_of_path = ["p1", "p2"]

	gp_max = {
		"gp1": 1,
		"gp2": 2,
		"gp3": 3,
		"gp4": 1,
		"gp5": 2,
		"gp6": 5,
		"gp7": 5,
		"gp8": 7,
		"gp9": 2,
		"gp10": 5,
		"gp11": 4,
		"gp12": 6,
		"gp13": 2,
		"gp14": 5,
		"gp15": 4,
		"gp16": 5
	}

	from random import randint

	for gp in gp_max.keys():
		db["gp_status"].insert_one({
			"gp": gp,
			"max": gp_max[gp],
			"count": [{'path': x, 'count': 0} for x in list_of_path]
		})
	# "count": [{'path': x, 'count': randint(0, gp_max[gp])} for x in list_of_path],
	return jsonify({"ok": True})
