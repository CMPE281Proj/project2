import boto3
from boto3.dynamodb.conditions import Key
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('RatingTable')


def lambda_handler(event, context):
    retrievedChefName=event['ChefName']
    
    response = table.query(
    KeyConditionExpression=Key('ChefName').eq(retrievedChefName)
    )
    items = response['Items']
    
    return (items)