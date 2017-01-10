class Http {
    static get(url) {

    }

    static post(url, data, success,error = '') {
        var body = {
            data: data,
            timestamp: (new Date()).valueOf(),
            sign: (new Date()).valueOf()
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),

        }).then((res) => {
                console.log(res)
                if (res.status==200) {
                    return res.json()
                } else {
                    error(res.status)
                }
            }
        ).then((data)=>{
            success(data['data'])
        })
    }
}
export default Http