import 'ant-design-vue/es/avatar/style/index.css'
import 'ant-design-vue/es/button/style/index.css'
import 'ant-design-vue/es/layout/style/index.css'
import 'ant-design-vue/es/grid/style/index.css'
import 'ant-design-vue/es/style/index.css'
import 'ant-design-vue/es/tag/style/index.css'
import 'ant-design-vue/es/divider/style/index.css'
import 'ant-design-vue/es/list/style/index.css'
import 'ant-design-vue/es/input/style/index.css'
import {Avatar, Button, Col, Divider, Input, Layout, List, Row, Tag} from "ant-design-vue";

const components = {
  install: (app => {
    app.use(Avatar)
    app.use(Button)
    app.use(Col)
    app.use(Divider)
    app.use(Input)
    app.use(Layout)
    app.use(List)
    app.use(Row)
    app.use(Tag)
  })
}

export default components