class Http {
    static get(url) {

    }

    static post(url, data, success, failure, error = '') {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    if (failure === '') {
                        console.log(res.status)
                    }
                }
            }
        ).then((data) => {
            if (data['code'] === 200) {
                success(data['data']);
            } else {
                failure(data['code'])
            }
        })
    }
}
export default Http