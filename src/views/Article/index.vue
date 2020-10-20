<template>
  <div class="content-box">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="article_info">
      <span><CalendarOutlined/> {{article.create_time}}</span>
      <span style="margin: 0 30px"><TagOutlined/> {{article.type}}</span>
      <span><FireOutlined/> {{article.view_people}}</span>
    </div>
    <div class="content">
      <v-md-preview :text="article.content"></v-md-preview>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {CalendarOutlined, TagOutlined, FireOutlined} from '@ant-design/icons-vue'
import articleApi from "../../api/article";

export default {
  name: "index",
  components: {
    CalendarOutlined,
    TagOutlined,
    FireOutlined
  },
  setup() {
    const article = ref({})

    const route = useRoute()

    function fetchData() {
      articleApi.articleInfo(route.params.id).then(res => {
        if (res.data.code === 200) {
          article.value = res.data.data
        }
      })
    }

    fetchData()
    return {
      article
    }
  }
}
</script>

<style scoped lang="scss">
.content-box {
  padding: 16px 12px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #efefef;
  font-family: PF-Medium, sans-serif;

  .title {
    text-align: center;
    color: #474747;
    font-size: 26px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  .article_info {
    color: #999999;
    text-align: center;
    font-size: 14px;
  }
}
</style>