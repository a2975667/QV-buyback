from pydub import AudioSegment
import random
from math import ceil

# probability
loss_rates = [0.20, 0.10, 0.05, 0.00]
packet_length = 80
total_length = ceil(90000/packet_length)
#filename = "demo_audio.mp3"
filenames = ["demo_audio.mp3", "test_audio.mp3"]


for filename in filenames:
	for loss_rate in loss_rates:
		song = AudioSegment.from_file(filename, "mp3")
		silence = AudioSegment.silent(duration=packet_length) # or be explicit

		#initialization
		slice_40ms = packet_length
		clip = song[0: packet_length]

		for i in range(0,total_length):
			if i == 0:
				clip = song[0: packet_length]
				prev = 0
				curr = packet_length
			else:
				loss = random.choices([1, 0], weights=[loss_rate, (1-loss_rate)])[0]
				# loss == 1 means packet loss
				if loss == 1: clip = clip + silence
				else: clip = clip + song[prev:curr]

			prev = slice_40ms * i
			curr = slice_40ms * (i+1)

		outname = filename.split(".")[0]+str(loss_rate).split(".")[1]+'.mp3'
		clip.export(outname, format="mp3")
