#!/usr/bin/python3	
import sqlite3
import json
import cgi
@app.route('/getmethod/<jsdata>')
def get_javascript_data(jsdata):
       return jsdata
$.get( "/getmethod/<javascript_data>" );
conn = sqlite3.connect('imdb.db')
c = conn.cursor()
tabla=
c.execute('SELECT * FROM actor')	
