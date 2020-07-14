
// 1 引入路由模块 
// 引入路由文件
import VueRouter from 'vue-router'
// 引入 Vue 框架 调用下面的 Vue.use 方法
import Vue from 'vue'
// 引入 英雄文件
import HeroList from '../views/HeroList.vue'
import Heroadd from '../views/Heroadd.vue'
import HeroEdit from '../views/HeroEdit.vue'
import Equip from '../views/Equip.vue'
import Skill from '../views/Skill.vue'
// 注册 VueRouter 构造函数 到Vue系统中 ( 与以前不一样的地方)
Vue.use(VueRouter)

// 2 定义路径和组件的关系
const routes = [
    {
        path:'/heroList',
        component:HeroList
    },
    {
        path:'/heroadd',
        component:Heroadd
    },
    {
        path:'/heroedit',
        component:HeroEdit
    },
    {
        path:'/equip',
        component:Equip
    },
    {
        path:'/skill',
        component:Skill
    },

]

// 3 实例化 VueRouter 出来
const router = new VueRouter({
    routes
})

// 4 router 导出 
export default router
