import 'ant-design-vue/es/avatar/style/index.css'
import 'ant-design-vue/es/button/style/index.css'
import 'ant-design-vue/es/layout/style/index.css'
import 'ant-design-vue/es/grid/style/index.css'
import 'ant-design-vue/es/style/index.css'
import 'ant-design-vue/es/tag/style/index.css'
import 'ant-design-vue/es/divider/style/index.css'
import 'ant-design-vue/es/list/style/index.css'
import 'ant-design-vue/es/input/style/index.css'
import 'ant-design-vue/es/back-top/style/index.css'
import 'ant-design-vue/es/anchor/style/index.css'
import {Anchor, Avatar, BackTop, Button, Col, Divider, Input, Layout, List, Row, Tag} from "ant-design-vue";

const components = {
  install: (app => {
    app.use(Anchor)
    app.use(Avatar)
    app.use(BackTop)
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