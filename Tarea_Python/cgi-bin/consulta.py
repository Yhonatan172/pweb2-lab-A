#!/usr/bin/python3
import re
import json
def matchLine(line):
	 dic = {}
	 x = re.search("^\[([0-9]+)\] ((.+), )?(.+); ((.+)|(http.+));(.+)\.", line)
	 dic["number"] = x.group(1)
	 dic["author"] = x.group(3)
	 dic["title"] = x.group(4)
	 dic["editor"] = x.group(5)
	 dic["year"] = x.group(8)
 	return dic
f = open("Base_De_Datos.txt")
data = []
for line in f:
 dic = matchLine(line)
 data.append(dic)
print("Content-Type: application/json\n\n")
print(json.dumps(data))


