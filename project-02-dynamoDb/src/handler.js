import { Buffer } from "node:buffer"
import { env } from "node:process"
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"

const { stringify } = JSON

const lambdaClient = new LambdaClient({
     credentials: {
       accessKeyId: 'ABC',
       secretAccessKey: 'SECRET',
     },
    apiVersion: "2015-03-31",
    ...(env.IS_OFFLINE && {
        endpoint: "http://localhost:3002",
    }),
    // region: 'local',
})

export async function hello() {
    const clientContext = stringify({
        foo: "foo",
    })

    const payload = stringify({
        bar: "bar",
    })

    const invokeCommand = new InvokeCommand({
        ClientContext: Buffer.from(clientContext).toString("base64"),
        FunctionName: "lambda-invoke-aws-sdk-v3-dev-toBeInvoked",
        InvocationType: "RequestResponse",
        Payload: new TextEncoder().encode(payload),
    })

    const response = await lambdaClient.send(invokeCommand)

    return {
        body: new TextDecoder("utf8").decode(response.Payload),
        statusCode: 200,
    }
}


export async function getId(event, context, callback)  {
    return {
        body: JSON.stringify({id: event.pathParameters.id}),
        statusCode: 200,
    };
}


export async function getUser(event, context, callback)  {
    context.callbackWaitsForEmptyEventLoop = false;

    return {
        body: JSON.stringify({id: event.pathParameters.id}),
        statusCode: 200,
    };

    /*connectToDatabase()
        .then(() => {
            User.findById(event.pathParameters.id)
                .then(user => callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(user)
                }))
                .catch(err => callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not fetch the user.'
                }));
        });


     */
};

export async function toBeInvoked(event, context) {
    return {
        clientContext: context.clientContext,
        event,
    }
}