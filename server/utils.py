import os
from server import db

from random import randint, sample
from time import sleep


def decide_path(gp):
	""" this function decides the json to be used"""
	# possible ways of implementing includes using another db to store the JSON
	# MDB returns the least used json files.
	""
	# QV description
	qv_example = {
		"type":"qv",
		"file":"example"
	}
	qv_test = {
		"type":"normal",
		"file":"test_qv"
	}

	# Phase 1 on charity
	likert_p1 = {
		"type":"normal",
		"file":"likert_p1"
	}
	qv_p1_036 = {
		"type":"qv",
		"file":"qv_p1_36"
	}
	qv_p1_108 = {
		"type":"qv",
		"file":"qv_p1_108"
	}
	qv_p1_324 = {
		"type":"qv",
		"file":"qv_p1_324"
	}

	# Phase 2 on political issue
	likert_p2 = {
		"type":"normal",
		"file":"likert_p2"
	}
	qv_p2_036 = {
		"type":"qv",
		"file":"qv_p2_36"
	}
	qv_p2_108 = {
		"type":"qv",
		"file":"qv_p2_108"
	}
	qv_p2_324 = {
		"type":"qv",
		"file":"qv_p2_324"
	}

	# donation
	donation = {
		"type":"donation",
		"file":"donation"
	}

	# thank you
	thank_full = {
		"type":"complete",
		"file":"thank_full"
	}

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

	# 8 path
	p1 = [likert_p1, likert_p2, donation, thank_short]
	p2 = [qv_example, qv_test, qv_p1_036, qv_p1_108, qv_p2_036, qv_p2_108, donation, thank_complete]
	p3 = [qv_example, qv_test, qv_p1_036, qv_p1_324, qv_p2_036, qv_p2_324, donation, thank_complete]
	p4 = [qv_example, qv_test, qv_p1_108, qv_p1_324, qv_p2_108, qv_p2_324, donation, thank_complete]
	p5 = [qv_example, qv_test, qv_p1_108, qv_p1_036, qv_p2_108, qv_p2_036, donation, thank_complete]
	p6 = [qv_example, qv_test, qv_p1_324, qv_p1_036, qv_p2_324, qv_p2_036, donation, thank_complete]
	p7 = [qv_example, qv_test, qv_p1_324, qv_p1_108, qv_p2_324, qv_p2_108, donation, thank_complete]
	p8 = [likert_p1, likert_p2, donation, thank_short]
	thank_you = [thank_full]

	# objectify paths to variable names
	collection = {
		"p1": p1,
		"p2": p2,
		"p3": p3,
		"p4": p4,
		"p5": p5,
		"p6": p6,
		"p7": p7,
		"p8": p8
	}

	g_test = [likert_p1, likert_p2, qv_example, qv_test, qv_p1_036, qv_p1_108, qv_p2_324, qv_p2_036, qv_p2_108, qv_p2_324, donation]

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


