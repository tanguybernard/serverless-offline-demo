# Serverless Demo


Demo to call Lambda and call dynamoDB


## Install

    npm i


## Invoke a function

Avec fichier:

    npx serverless invoke local --function getId --path data/test.json

Sans :

    npx sls invoke local --function getId --data '{"pathParameters":{"id":"123456"}}'

## Run local environment

    npx sls offline start


## Explanation

SLS offline, launch a web server and can simulate an api gateway

## SLS Dynamo DB

Issue : Download DynamoDB local jar doesnt work !

Solution:

    Thanks that works. Originally i used sls dynamodb install but realised that /DynamoDBLocal_lib was completely empty and so was /third_party_licenses. I then downloaded the jar manually from your link. Copied the extracted contents into my project's /.dynomodb , sudo chmod the .jar and its running now.

source: https://github.com/rynop/dynamodb-local/issues/30#issuecomment-704665906


Result:

- .dynamodb
    - DynamDBLocal.jar
    - dynamodb-local-metadata.json
    - DynamoDBLocal_lib
      - ... 
- src



## Tests

https://medium.com/@octoz/automate-your-serverless-api-integration-tests-locally-e2f41d3ec757

Meilleur :

https://mario.arnautou.fr/2019/06/19/serverless-func-tests/

## Credits


Example Lambda Offline :


https://github.com/dherault/serverless-offline/tree/master/examples/lambda-invoke/lambda-invoke-aws-sdk-v3

Example React + DynamoDB

https://github.com/99x/serverless-react-boilerplate/blob/aws-react/api/todo/serverless.yml

Exemple SDK DynamoDB

https://docs.aws.amazon.com/fr_fr/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html

Tuto

https://dev.to/didil/serverless-testing-strategies-4g92

https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772

Serverless DynamoDb local

https://www.serverless.com/plugins/serverless-dynamodb-local/


Tuto serverless and sam

https://dev.to/hoangleitvn/how-to-build-test-and-deploy-lambda-function-to-aws-53cj

Comparaison solution

https://lumigo.io/aws-lambda-deployment/