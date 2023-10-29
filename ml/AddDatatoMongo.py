import pandas as pd

df = pd.read_excel("Lawyer Data.xlsx")
from pymongo import MongoClient
import certifi
client = MongoClient("mongodb+srv://neil:PZdCdb1T5WThnMzS@cluster0.ia9uyzl.mongodb.net", tlsCAFile=certifi.where())  # Replace with your MongoDB server URL
db = client["test"]
collection = db["lawyerdb"]

for index, row in df.iterrows():
    data_dict = row.to_dict()
    collection.insert_one(data_dict)
