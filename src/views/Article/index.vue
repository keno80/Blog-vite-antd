<template>
  <div class="content-box">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="article_info">
      <span><CalendarOutlined/> {{ article.create_time }}</span>
      <span style="margin: 0 30px"><TagOutlined/> {{ article.type }}</span>
      <span><FireOutlined/> {{ article.view_people }}</span>
    </div>
    <div class="content">
      <v-md-preview :text="article.content" ref="MdEditor"></v-md-preview>
    </div>
    <a-back-top>
      <div class="ant-back-top-inner">
        UP
      </div>
    </a-back-top>
    <teleport to=".anchor_box" v-if="showAnchor">
      <a-anchor :offsetTop="6" :wrapperStyle="{marginLeft: '0',padding: '12px'}" @click="handleClick">
        <div class="bg">
          <a-anchor-link v-for="item in anchor" :key="item.id" :href=`#${item.id}` :title="item.title"/>
        </div>
      </a-anchor>
    </teleport>
  </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
import {useRoute} from 'vue-router'
import {CalendarOutlined, TagOutlined, FireOutlined, RocketFilled} from '@ant-design/icons-vue'
import articleApi from "../../api/article";

export default {
  name: "index",
  components: {
    CalendarOutlined,
    TagOutlined,
    FireOutlined,
    RocketFilled
  },
  setup() {
    const state = reactive({
      anchor: [],
      showAnchor: false
    })

    const MdEditor = ref(null)
    const article = ref({})

    const route = useRoute()

    article.value = {
      article_id: 1,
      view_people: 2897,
      title: '测试标题',
      isTop: 1,
      tags: ['Vue', 'JavaScript'],
      type: 'Vue笔记',
      description: '这是一段测试描述',
      create_time: '2020-10-22 09:18:29'
    }

    function fetchData() {
      articleApi.articleInfo(route.params.id).then(res => {
        if (res.data.code === 200) {
          article.value = res.data.data
          state.showAnchor = true

          setTimeout(() => {
            const Node = MdEditor.value.$el.querySelectorAll('.v-md-editor-preview h3')
            const anchor = Array.from(Node).filter((title) => !!title.innerText.trim())

            state.anchor = anchor.map((el) => ({
              id: el.id,
              title: el.innerText
            }))
            console.log(state.anchor);
          }, 1000)
        }
      })
    }

    function handleClick(e) {
      e.preventDefault()
    }

    fetchData()

    const refState = toRefs(state)
    return {
      handleClick,
      ...refState,
      article,
      MdEditor,
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

  .ant-back-top {
    bottom: 100px;
    right: 200px;
  }

  .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
}
</style>