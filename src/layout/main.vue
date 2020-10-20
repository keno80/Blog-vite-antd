<template>
  <div class="main-content">
    <a-row type="flex" justify="center" class="main-content">
      <a-col :md="18">
        <div class="box-left">
          <router-view/>
        </div>
      </a-col>
      <a-col :md="6">
        <div class="box-right about">
          <div style="margin-bottom: 1rem">
            <a-avatar :size="90"
                      src="https://images.pexels.com/photos/4856247/pexels-photo-4856247.jpeg?crop=entropy&cs=srgb&dl=pexels-elijah-o%27donnell-4856247.jpg&fit=crop&fm=jpg&h=945&w=640"></a-avatar>
          </div>
          <div class="about-introduce">
            <div class="my-name">{{ userInfo.nickname }}</div>
            <div style="margin-bottom: 1rem">{{ userInfo.sign }}</div>
            <div class="about-tag">
              <!--              <a-tag color="blue">新手码农</a-tag>-->
              <!--              <a-tag color="pink">只会 Web</a-tag>-->
              <!--              <a-tag color="green">略懂 Node</a-tag>-->
              <!--              <a-tag color="orange">经验只有1年多</a-tag>-->
              <!--              <a-tag color="cyan">破站累计访问289次</a-tag>-->
              <a-tag v-for="(item, index) in userInfo.tags" :key="index" :color="tagType">{{ item }}</a-tag>
            </div>
            <a-divider>我在这些地方</a-divider>
            <a href="https://github.com/keno80" target="_blank">
              <GithubOutlined style="font-size: 26px"/>
            </a>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {GithubOutlined} from '@ant-design/icons-vue'
import {reactive, toRefs, computed} from 'vue'
import dashboardApi from "../api/dashboard";

export default {
  name: "main-content",
  components: {
    GithubOutlined
  },
  setup() {
    const data = reactive({
      userInfo: {}
    })

    function fetchData() {
      dashboardApi.userInfo().then(res => {
        if (res.data.code === 200) {
          data.userInfo = res.data.data[0]
          data.userInfo.tags = JSON.parse(data.userInfo.tags)
        }
      })
    }

    const tagType = computed(() => {
      const tagsMap = {
        1: 'blue',
        2: 'cyan',
        3: 'pink',
        4: 'green',
        5: 'orange'
      }
      return tagsMap[Math.floor(Math.random() * 5 + 1)]
    })

    const refData = toRefs(data)

    return {
      ...refData,
      tagType,
      fetchData
    }
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<style scoped lang="scss">
.main-content {
  background-color: #f1f6ff;
  padding: 10px 0;

  .main-content {
    max-width: 1100PX;
    margin: 0 auto;

    .box-right {
      background-color: #ffffff;
      margin-left: 10px;
      border-radius: 4px;
      border: 1px solid #efefef;
      padding: 10px;

      .about-introduce {
        margin-bottom: 1rem;

        .my-name {
          font-family: PF-Bold, sans-serif;
          color: #29b6ff;
          font-size: 16px;
          margin-bottom: 1rem;
        }

        .about-tag {
          line-height: 28PX;
        }

        .svg-size {
          svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }

    .about {
      text-align: center;
      padding: 16px;
    }
  }
}

</style>