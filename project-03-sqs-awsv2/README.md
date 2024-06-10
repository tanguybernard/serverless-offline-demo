# Sqs Test with aws sdk v2

Note: aws sdk v3 incompatible with serverless-offline-sqs

## 1. Install ElastiqMq (standalone or docker)

https://github.com/softwaremill/elasticmq?tab=readme-ov-file


java -jar elasticmq-server-1.4.2.jar

--> localhost:9324


## 2. Execute

Run Queue

    npm run queue-start

Run Server

    npm run offline

## 3. Invoke

Test Hello World

    npx sls invoke local -f hello

Send Message

    npx sls invoke local -f QueueSendMessage

## 4. Show message received in the "offline" console

...

# Credits

https://seehou.hashnode.dev/serverless-aws-sqs-part-1