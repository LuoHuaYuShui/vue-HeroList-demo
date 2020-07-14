<template>
	<div class="hore-list">
		<button class="btn btn-primary" @click="add">添加英雄</button>
		<hr />
		<table class="table table-striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>英雄名称</th>
					<th>英雄性别</th>
					<th>创建时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in list" :key="item.id">
					
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.gender}}</td>
					<td>{{item.time | timeFormdate}}</td>
					<td>
						<button
							class="btn btn-success"
							style="margin-right:10px"
							 @click="edit(item.id)"
						>编辑</button>
						<button  class="btn btn-danger" @click="del(item.id)">删除</button>
					</td>
				</tr>
				<tr v-show="list.length===0">
					<td colspan="5" style="text-align:center">暂无数据</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import Axios from 'axios'
import Moment from 'moment'
export default {
   data() {
		return {
			list: []
		}
	},
	methods:{ 
		 getList(){
			 Axios.get(
				 ' http://localhost:6006/heroList'
				// method:'get',
				//  data: { 'post请求参数'},
				//  params: { 'get请求参数'}
			 ).then(res=>{
				 //成功回调
				 console.log(res)
				 this.list = res.data
			 });
		 },
		 del(id){
			 Axios.delete(
				`http://localhost:6006/heroList/${id}`
				// method:'get',
				//  data: { 'post请求参数'},
				//  params: { 'get请求参数'}
			 ).then(res=>{
				 //成功回调
				 console.log(res)
				this.getList()
			 });
		 },
		 add(){
			 this.$router.push({
				 path:'/heroadd'
			 })

			
		 },
		 edit(id){
			 this.$router.push({
				 path:'/heroedit',
				 query:{
                     id:id
				 }
			 })
		 }

		//  list(){
		// 	 axios({
		// 		 url:'http://localhost:6006/heroList',
		// 		 method:'get',
		// 		//  data: { 'post请求参数'},
		// 		//  params: { 'get请求参数'}
		// 	 }).then(res=>{
		// 		 //成功回调
		// 		 console.log(res)
		// 	 });
		//  }
	},
	mounted(){
		this.getList()
		// this.list()
	},
	filters:{
		// 格式化文本 事件过滤器
		timeFormdate:function(val){
           return Moment(val).format('YYYY-MM-DD');
		}
	}
}
</script>