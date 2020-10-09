<template>
  <div class="main-content">
    <a-row type="flex" justify="center" class="main-content">
      <a-col :md="18">
        <div class="box-left">

        </div>
      </a-col>
      <a-col :md="6">
        <div class="box-right about">
          <div style="margin-bottom: 1rem">
            <a-avatar :size="90" src="https://images.pexels.com/photos/4856247/pexels-photo-4856247.jpeg?crop=entropy&cs=srgb&dl=pexels-elijah-o%27donnell-4856247.jpg&fit=crop&fm=jpg&h=945&w=640"></a-avatar>
          </div>
          <div class="about-introduce">
            <div class="my-name">爱吃鱼的猫</div>
            <div style="margin-bottom: 1rem">一个新手且苦逼的前端狗</div>
            <div class="about-tag">
              <a-tag color="blue">新手码农</a-tag>
              <a-tag color="pink">只会 Web</a-tag>
              <a-tag color="green">略懂 Node</a-tag>
              <a-tag color="orange">经验只有1年多</a-tag>
              <a-tag color="cyan">破站累计访问289次</a-tag>
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

export default {
  name: "main-content",
  components: {
    GithubOutlined
  }
}
</script>

<style scoped lang="scss">
.main-content {
  background-color: #f1f6ff;
  padding: 10px 0;

  .main-content {
    max-width: 1100PX;
    margin: 0 auto;

    .box-left {
      height: 300px;
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #efefef;
    }

    .box-right {
      background-color: #ffffff;
      margin-left: 10px;
      border-radius: 4px;
      border: 1px solid #efefef;
      padding: 10px;

      .about-introduce {
        margin-bottom: 1rem;
        .my-name {
          font-family: PF-Bold,sans-serif;
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