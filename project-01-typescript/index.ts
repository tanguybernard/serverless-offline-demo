export async function handler(event: any) {
    let body: {name: string} = {name: 'world'};
    if (event.body) {
        body = event.body
    }

    const name = body.name;

    return {
        statusCode: 200,
        body: `Hello, ${name}`,
    };
}