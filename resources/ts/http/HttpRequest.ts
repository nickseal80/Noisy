import axios from "axios";
import route from "ziggy";

type Params = { [key: string]: any };

export enum Method {
    get = 'get',
    post = 'POST',
    put = 'PUT',
    delete = 'DELETE',
}

class HttpRequest {
    private response;

    fetch = async (method: Method, routeName: string, params: Params = null, callback = null) => {
        try {
            return await axios[method](route(routeName, params));

            // if (callback) {
            //     callback(data);
            // }

            // return data;
        } catch ({ response }) {
            console.error(response);
        }
    }
}

export default HttpRequest;
