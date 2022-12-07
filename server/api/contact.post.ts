export default defineEventHandler((event) => {

    const method = event.req.method;
    const {method: method1} = event.req;
    if(method1 === "GET") {
       return 'poo'
    }
    return {
        api: 'works'
    }
})