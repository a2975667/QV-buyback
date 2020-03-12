import os
from server import db

from random import randint, sample
from time import sleep


def decide_path(gp):
	""" this function decides the json to be used"""
	# possible ways of implementing includes using another db to store the JSON
	# MDB returns the least used json files.
	""

	# video
	video_demo = {
		"type":"video",
		"file":"video_demo"
	}

	video_element = {
		"type":"normal",
		"file":"video_element"
	}


	# Liket Group: Group 1
	likert = {
		"type":"normal",
		"file":"likert"
	}

	# QV group: Group 2
	qv_example = {
		"type":"qv",
		"file":"example"
	}

	qv_test = {
		"type":"normal",
		"file":"test_qv"
	}

	qv_108 = {
		"type":"qv",
		"file":"qv_108"
	}


	# Buyback Group: group 3
	video_buyback_demo = {
		"type":"video",
		"file":"video_buyback_demo"
	}

	video_buyback = {
		"type":"video",
		"file":"video_buyback"
	}

	# video_demo_test = {
	# 	"type":"normal",
	# 	"file":"video_sample_test"
	# }

	video_actual = {
		"type":"video",
		"file":"video"
	}

	video_test = {
		"type":"normal",
		"file":"video_test"
	}

	# thank you

	thank_short = {
		"type":"complete",
		"file":"thank_short"
	}

	thank_complete = {
		"type":"complete",
		"file":"thank_complete"
	}

	thank_attention = {
		"type":"complete",
		"file":"thank_attention"
	}

	thank_you = {
		"type":"complete",
		"file":"thank_full"
	}

	## 3 path
	# p1 = [video_element]
	p1 = [video_element, video_demo, likert, thank_complete]
	p2 = [qv_example, qv_test, video_element, video_demo, qv_108, thank_complete]
	# p3 = [video_buyback_demo, video_buyback, video_actual, video_test, thank_complete] if the test is sperate
	p3 = [video_element, video_buyback, video_actual, thank_complete]
	# full_test = [video_demo, likert, qv_example, qv_test, qv_108, video_actual, video_test, thank_complete]

	# objectify paths to variable names
	collection = {
		"p1": p1,
		"p2": p2,
		"p3": p3
		#"test": full_test
	}

	random_ms = randint(1,30)*0.1
	sleep(random_ms)
	gp_status = db.gp_status.find({"gp":gp})[0]

	seq = [x['count'] for x in gp_status["count"]]
	min_count = min(seq)

	# early return if min_count == max_for path
	if min_count >= gp_status["max"]:
		return "thank_you", thank_you

	# identify candidate paths
	candidate_path = []
	for path in gp_status["count"]:
		if path['count'] == min_count:
			candidate_path.append(path['path'])

	selected_path = sample(candidate_path, 1)[0]

	#print("return_path: ", selected_path, "  |  ", int(random_ms))
	gp_status["count"][(int(selected_path[1]))-1]["count"] += 1
	db.gp_status.find_one_and_replace({"gp":gp}, gp_status)

	return selected_path, collection[selected_path]


