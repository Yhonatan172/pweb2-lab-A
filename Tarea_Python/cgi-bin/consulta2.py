#!/usr/bin/python3	
import sqlite3
import json
import cgi
import cgitb
form = cgi.FieldStorage()

table = form.getvalue('valor')

conn = sqlite3.connect('imdb.db')
c = conn.cursor()
data=[]
for datos in c.execute('SELECT * FROM actor'):
	data.append(datos)

print("Content-type: application/json\n\n")
#print("Content-type: text/html\n\n")
#print("<h1>Hola</h1>")
print(json.dumps(data)) 
#print("Content-type: application/json")
#response={'Price':54,'Cost':'99'}
#print(json.JSONEncoder().encode(response))