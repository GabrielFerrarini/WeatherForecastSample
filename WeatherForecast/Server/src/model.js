import Superagent from "superagent";

class Model {
    constructor() {
        this.initialize();
    }

    execute() {
        return new Promise((resolve, reject) => {
            this.request.end((error, res) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(res)
                }
            });
        });
    }

    get() {
        let self = this;

        this.request = Superagent.get(this.endpoint);

        this.queryString.map(function (queryStringItem) {
            self.request.query(queryStringItem);
        });

        return this.execute();
    }

    query(value) {
        this.queryString.push(value);

        return this;
    }
}

export default Model;