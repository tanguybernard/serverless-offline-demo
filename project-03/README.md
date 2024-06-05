

## Install ElastiqMq (standalone or docker)

https://github.com/softwaremill/elasticmq?tab=readme-ov-file


java -jar elasticmq-server-1.4.2.jar

--> localhost:9324


## Execute

Queue

    npm run queue-start

Server

    npm run offline

## Invoke

    npx sls invoke local -f hello

Send Message

    npx sls invoke local -f QueueSendMessage

Show message received in the "offline" console

# Credits

https://seehou.hashnode.dev/serverless-aws-sqs-part-1