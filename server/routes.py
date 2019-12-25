import json
import json.decoder
import os
import random
import uuid
from pprint import pprint
from sys import exit

import requests
from flask import Flask, abort, jsonify, request, current_app, send_from_directory
from flask_cors import CORS
from datetime import datetime
from server import app, db
from server.utils import decide_path
from bson.objectid import ObjectId

@app.route('/welcome/<string:gp>')
def root(gp):
	return app.send_static_file('index.html')

@app.route('/qv')
@app.route('/likert')
@app.route('/donation')
@app.route('/complete')
@app.route('/demographic')
def root1():
	return app.send_static_file('index.html')

@app.route('/createUser', methods=['POST'])
def welcome():
	""" Once the user decides to move on, create a user and nsave to database.
	return database object id as user id, flow.
	"""

	gp = request.json["gp"]

	user = {
		"userid": "",
		"create_time": datetime.utcnow(),
		"complete_flag": False,
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
	user_path_id = user['path_id']
	user["qualify"] = False
	user["complete_flag"] = True
	print(user)
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

	print(request.json)
	insert_data = request.json
	insert_data['time'] = datetime.utcnow()
	db.data.insert_one(insert_data)

	return jsonify({'ok': True}), 200

# donation
@app.route('/api/donation')
def donation():
	""" returns the list of donation orgs
	"""

	filename = '/'.join(['data', 'donation.json'])

	with current_app.open_resource(filename) as f:
		return json.loads(f.read().decode('utf-8'))


@app.route('/submit-donation', methods=['POST'])
def submit_donation():
	"""submit donation to db"""

	print(request.json)
	insert_data = request.json
	insert_data['time'] = datetime.utcnow()
	db.donation.insert_one(insert_data)

	db.user.update_one({
			'_id': ObjectId(insert_data['userId'])
		}, {
			'$set': {
				"complete_flag": True
			}
		}, upsert=False)

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
	#return app.send_static_file('debreif.pdf')


@app.route('/admin/setup_db')
def setup_route_db():
	"""comment out for production"""
	db["gp_status"].drop()
	db["user"].drop()
	db["demographic"].drop()
	db["donation"].drop()
	db["data"].drop()

	list_of_path = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]

	gp_max = {
		"gp1": 1,
		"gp2": 1,
		"gp3": 1,
		"gp4": 1,
		"gp5": 1,
		"gp6": 2,
		"gp7": 2,
		"gp8": 3,
		"gp9": 1,
		"gp10": 2,
		"gp11": 2,
		"gp12": 3,
		"gp13": 1,
		"gp14": 2,
		"gp15": 2,
		"gp16": 2
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
