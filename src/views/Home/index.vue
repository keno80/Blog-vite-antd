<template>
  <div>
    <div class="content-box">
      <a-list item-layout="vertical" size="large" :data-source="articleList">
        <template v-slot:renderItem="{ item, index }">
          <a-list-item key="item.title">
            <template v-slot:actions>
              <a-tag color="blue" v-if="item.isTop === 1">置顶</a-tag>
              <span v-for="(text, index) in item.tags" :key="index">
                <a-tag color="orange">{{ text }}</a-tag>
              </span>
              <a-tag color="cyan">{{item.type}}</a-tag>
              {{item.create_time}}
            </template>
            <a-list-item-meta :description="item.description">
              <template v-slot:title>
                <a :href="item.href" class="title_style">{{ item.title }}</a>
              </template>
            </a-list-item-meta>
            <div v-html="item.introduce"></div>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {StarOutlined, LikeOutlined, MessageOutlined} from '@ant-design/icons-vue';
import articleApi from "../../api/article";

export default {
  name: "index",
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  setup() {
    const data = reactive({
      articleList: [],
      page: 1,
      size: 10,
      searchQuery: {
        title: '',
        type: ''
      }
    })

    function fetchData() {
      articleApi.userInfo(data.page, data.size, data.searchQuery).then(res => {
        // console.log(res);
        data.articleList = res.data.data
      })
    }

    const refData = toRefs(data)
    return {
      ...refData,
      fetchData
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped lang="scss">
.content-box {
  padding: 16px 12px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #efefef;

  .title_style {
    color: #29b6ff;
    font-size: 26px;
  }
}
</style>