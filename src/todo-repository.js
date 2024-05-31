import {client} from "./dynamo-db-client.js"
import {DynamoDBDocumentClient, GetCommand} from "@aws-sdk/lib-dynamodb";

const docClient = DynamoDBDocumentClient.from(client);

export const getTodoFrom = async (id) => {
    const command = new GetCommand({
        TableName: "todosTable",
        Key: {
            id: id,
        },
    });
    return await docClient.send(command);
}