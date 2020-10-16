import axios from '../utils/http'
import {baseUrl} from "../utils/http";

export default {
  userInfo() {
    return axios({
      url: `${baseUrl}/article/list`,
      method: 'get'
    })
  }
}