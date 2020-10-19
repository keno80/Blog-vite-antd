import axios from '../utils/http'
import {baseUrl} from "../utils/http";

export default {
  userInfo(page, size, searchQuery) {
    return axios({
      url: `${baseUrl}/article/list/${page}/${size}`,
      method: 'post',
      data: searchQuery
    })
  }
}