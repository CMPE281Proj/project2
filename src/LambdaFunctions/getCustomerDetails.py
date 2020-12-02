import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CustomerDetails')

def lambda_handler(event, context):
        
    emailId=event["Email"]
    
    response = table.get_item(
    Key={
        "Email":emailId
      }
    )
    try:
        item = response["Item"]
    except KeyError:
        return 'Email id is not valid'
    else:
        return item