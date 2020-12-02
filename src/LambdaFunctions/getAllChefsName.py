import boto3
from boto3.dynamodb.conditions import Key
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ChefTable')

def lambda_handler(event, context):
    
    response = table.scan()
    lst = []
    for i in response['Items']:
        lst.append(i['Name'])

    return lst