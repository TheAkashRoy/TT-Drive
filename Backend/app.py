from flask import Flask,redirect, url_for, request
import pymongo
import shortuuid


cluster = pymongo.MongoClient("mongodb+srv://emailforakashroy:nc3iezJqetnF0X0I@cluster0.hxo7td9.mongodb.net/?retryWrites=true&w=majority")
db = cluster["texts"]
collection = db['text']


app = Flask(__name__)

@app.route("/",methods = ['POST'])
def home():
  if request.method == 'POST':
    text = request.form['info']
    uid = shortuuid.ShortUUID().random(length=4)
    collection.insert_one({"_id":uid, "text":text})
    return redirect(url_for('success',name = uid))

@app.route('/success/<uid>')
def success(uid):
   url = "ttdrive.vercel.app/"+uid
   return url

@app.route('/<uid>')
def data(uid):
  text = collection.find_one({"_id":uid})
  return text


if __name__ == "__main__":
  # app.run(debug=True)
  # cluster = pymongo.MongoClient("mongodb+srv://emailforakashroy:nc3iezJqetnF0X0I@cluster0.hxo7td9.mongodb.net/?retryWrites=true&w=majority")
  # text = "this is that"
  # uid = shortuuid.ShortUUID().random(length=4)
  # collection.insert_one({"_id":uid, "text":text})
  # uid = "4zv8"
  # t = collection.find_one({"_id":uid})
  # print(t)
  # collection.insert_one({"_id":0, "text":"this is the The"})