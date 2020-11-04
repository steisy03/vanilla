
export default class Request {

    constructor(token) {
        this.token = token;
    }

    async post(path, data) {

        var headers = {
            'Content-Type': 'application/json'
        }

        if (this.token !== undefined) {
            headers["API-key"] = this.token;
        }

        let response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        });

        if (response.status === 200 || response.status === 201) {
            return response.json();
        }

        return undefined;
    }

    async put(path, data) {

        var headers = {
            'Content-Type': 'application/json'
        }

        if (this.token !== undefined) {
            headers["API-key"] = this.token;
        }

        let response = await fetch(path, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: headers
        });

        if (response.status === 200 || response.status === 201) {
            return response.json();
        }

        return undefined;
    }


    async get(path) {
        var headers = {
            'Content-Type': 'application/json',  
        }
        headers["API-key"] =  this.token;
        let response = await fetch(path, {
            method: 'GET',
            headers: headers
        });
        return response.json();
    }

    async delete(path) {

        var headers = {
            'Content-Type': 'application/json'
        }

        if (this.token !== undefined){
            headers["API-key"] =  this.token;
        }

        console.log('Headers', headers);

        let response = await fetch(path, {
            method: 'DELETE',
            headers: headers
        });

        if (response.status === 200 || response.status === 201) {
            return true;
        } else {
            return false;
        }
    }


}