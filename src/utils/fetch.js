const baseUrl = 'http://localhost:7002' 
const convertArray = (params) => {
    let arr = Object.entries(params),
    str = ''
    arr.forEach((item) => {
        str += '&' + item[0] + '=' + item[1]
    })
    return str.slice(1)
}

module.exports.fetch =async(url, params, method = 'GET') => {
    let requestUrl = '',
    options = {},
    data = convertArray(params)
    if(method === 'GET') {
        if(params) {
            requestUrl = baseUrl + url + '?' + data
            options = {
                method: method
            }
        }
    } else {
        requestUrl = baseUrl + url
        options = {
            method: method,
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'credentials': 'include'
            }),
            body: data
        }
    }
    let promise = await fetch(requestUrl, options)
    ,promiseJson = promise.json()
    //promise对象
    console.log(promiseJson)
    //response对象  JSON.parse   将json转换成js对象
    console.log(promise)
    return promiseJson
   
    /*
        .then(res => res.json())
        .catch(err => console.log('error:',err))
        .then(resJson => {
            console.log(resJson)
            return resJson
        })*/
}