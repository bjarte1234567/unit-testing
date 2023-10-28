export function wait(ms = 1000, resolveWith = "hello world"){
    return new Promise(resolve =>{
        setTimeout(() => resolve(resolveWith), ms)
    })
}