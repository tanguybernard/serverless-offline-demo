

//c796d733-9779-45c5-a130-20fd1fd0b652


import {getTodoFrom} from "./todo-repository.js";

export async function getTodo(event, context, callback)  {
    context.callbackWaitsForEmptyEventLoop = false;

    const id = event.pathParameters.id;

    try{
        const todo = await getTodoFrom(id);
        return {
            body: JSON.stringify(todo.Item),
            statusCode: 200,
        };
    }
    catch (err) {
        console.log(err)
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the user.'

        }
    }



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
