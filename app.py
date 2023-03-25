from flask import Flask
import pymongo
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

if __name__ == "__main__":
  # app.run(debug=True)
  client = pymongo.MongoClient("mongodb://localhost:27017/")
  print(client)
  
  db = client['aka']