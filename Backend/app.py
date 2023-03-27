from flask import Flask,redirect, url_for, request
import pymongo
import shortuuid
import datetime
from dotenv import dotenv_values
config = dotenv_values(".env")


cluster = pymongo.MongoClient(config["ATLAS_URI"])
db = cluster["ttd"]
collection = db['text']


app = Flask(__name__)

# @app.route("/",methods = ['POST'])
@app.route("/insert/<data>")
def home(data):
  if request.method == 'POST':
    text = request.form['info']
    uid = shortuuid.ShortUUID().random(length=4)
    collection.insert_one({"_id":uid, "text":text})
    return redirect(url_for('success',name = uid))
  
  text = data
  uid = shortuuid.ShortUUID().random(length=4)
  ct = datetime.datetime.now()
  collection.insert_one({"_id":uid, "text":text,"timestamp": ct})
  return redirect(url_for('success',uid = uid))

@app.route('/success/<uid>')
def success(uid):
   url = "ttdrive.vercel.app/"+uid
   return url

@app.route('/find/<uid>')
def data(uid):
  text = collection.find_one({"_id":uid})
  
  return text["text"]


if __name__ == "__main__":
  app.run(debug=True)