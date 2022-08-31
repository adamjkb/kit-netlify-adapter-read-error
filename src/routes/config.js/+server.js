/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    return new Response(`console.log("Hello")`, {
        headers: {
            'Content-Type': 'application/javascript'
        }
    })
}