
import {SQSClient, ListQueuesCommand, SendMessageCommand} from "@aws-sdk/client-sqs";
import AWS from "aws-sdk"
export const hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export const sendMessage = async (event) => {
    const SQS = new AWS.SQS({
        accessKeyId: "local",
        secretAccessKey: "local",
        endpoint: "127.0.0.1:9324"
    });

    try {

        const queueParams = {
            Entries: [
                {
                    Id: "1",
                    MessageBody: "this is a message body",
                }
            ],
            QueueUrl: 'http://127.0.0.1:9324/queue/myFirstQueue'
        }

        const result = await SQS.sendMessageBatch(queueParams).promise();
        console.log(JSON.stringify(result, null, 2));
    } catch (e) {
        console.error(e);
    }
};

export const receiveMessage = async (event) => {
    console.log('RECEIVE')
    console.log(JSON.stringify(event.Records, null, 2));
};