import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('RatingTable')

def lambda_handler(event, context):
    table.put_item(Item=event)
    return {"code":200, "message":"Record inserted sucessfully"}