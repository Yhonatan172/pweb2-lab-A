#!/usr/bin/python3	
import sqlite3
import json
import cgi
import cgitb
form = cgi.FieldStorage()

category = form.getvalue('valor')
conn = sqlite3.connect('imdb.db')
c = conn.cursor()
data=[]
if category == "Actor":
	for datos in c.execute('SELECT * FROM Actor'):
	data.append(datos)
else if category == "tittle":
	for datos in c.execute('SELECT * FROM Movie'):
	data.append(datos)
else if category == "year";
	for datos in c.execute('SELECT * FROM Casting'):
	data.append(datos)

print("Content-type: application/json\n\n")
print(json.dumps(data)) 