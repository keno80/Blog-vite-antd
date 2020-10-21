<template>
  <div class="header">
    <div class="header-center">
      <a-row type="flex" justify="center">
        <a-col :xs="24" :sm="24" :md="22">
          <a class="logo" @click="toPath('/')">小二有鱼吗 </a>
          <span> 我的随笔博客</span>
        </a-col>
        <a-col :xs="0" :sm="0" :md="2" class="nav-style">
          <a-row type="flex">
            <a-col :xs="0" :sm="0" :md="24">
              <a @click="toPath('/')">
                <HomeOutlined/>
                博客首页
              </a>
            </a-col>
<!--            <a-col :xs="0" :sm="0" :md="6">-->
<!--              <a @click="toPath('/vue')">-->
<!--                <icon-font type="Icon-vuejs-alt"/>-->
<!--                Vue笔记-->
<!--              </a>-->
<!--            </a-col>-->
<!--            <a-col :xs="0" :sm="0" :md="6">-->
<!--              <a @click="toPath('/node')">-->
<!--                <icon-font type="Icon-nodejs"/>-->
<!--                Node.Js笔记-->
<!--              </a>-->
<!--            </a-col>-->
<!--            <a-col :xs="0" :sm="0" :md="6">-->
<!--              <a @click="toPath('/learn')">-->
<!--                <HighlightOutlined/>-->
<!--                学习随笔-->
<!--              </a>-->
<!--            </a-col>-->
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {HomeOutlined, HighlightOutlined, createFromIconfontCN} from '@ant-design/icons-vue'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2116583_6qgb5rts34d.js'
})

export default {
  name: "header-content",
  components: {
    HomeOutlined,
    HighlightOutlined,
    IconFont
  },
  setup() {
    const router = useRouter()
    function toPath(path) {
      router.push({
        path
      })
    }

    return {
      toPath
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #ffffff;
  color: #999999;
  height: 50px;
  padding: 6.4px;
  border-bottom: 1px solid #eee;

  .header-center {
    max-width: 1100PX;
    margin: 0 auto;
    font-family: PF-Medium, sans-serif;

    .logo {
      color: #29b6ff;
      font-size: 24px;
    }

    .nav-style {
      padding-top: 8px;
    }
  }
}
</style>