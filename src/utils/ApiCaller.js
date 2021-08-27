import axios from "axios";
import * as config from "./../constants/config";

class APICaller {
    static Call = (action, method = 'GET', data) => {
      return  axios({
            method: method,
            url: `${config.urlBase}${action}`,
            data
        }).catch((err) => {
            console.log(err);
        });
    }
}
export default APICaller;