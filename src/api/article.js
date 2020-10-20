import axios from '../utils/http'
import {baseUrl} from "../utils/http";

export default {
  //获取文章列表
  articleList(page, size, searchQuery) {
    return axios({
      url: `${baseUrl}/article/list/${page}/${size}`,
      method: 'post',
      data: searchQuery
    })
  },

  //获取文章详情
  articleInfo(id) {
    return axios({
      url: `${baseUrl}/article/info/${id}`,
      method: 'post'
    })
  }
}