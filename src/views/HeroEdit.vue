<template>
  <div class="hore-edit">
    <h3>编辑英雄</h3>
    <hr />
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label">英雄名称</label>
        <div class="col-sm-10">
          <input v-model="formData.name" type="text" class="form-control" style="width:200px" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">英雄性别</label>
        <div class="col-sm-10">
          <input v-model="formData.gender" type="radio" value="男" /> 男
          <input v-model="formData.gender" type="radio" value="女" /> 女
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-primary" @click="save">保存</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
	data(){
		return {
			formData:{
				name:'',
				gender:'',
			}
		}
	},
	methods:{
		// 获取 id 数据回填 
		getEdit(){
			// 获取id
			let id = this.$route.query.id
			// 根据id 获取数据
			Axios.get(`http://localhost:6006/heroList/${id}`,{

			}).then((res)=>{
                 let { name, gender } = res.data
				this.formData.name = name
				this.formData.gender = gender

			})
		},
		// 根据 id 修改 数据
         save(){
		// 	   // 获取 id 
			   let id = this.$route.query.id
			   let { name, gender } = this.formData
			   Axios.put(`http://localhost:6006/heroList/${id}`,{
				   name ,
				   gender,
				   time : new Date()
			   }).then( (res) =>{
                   this.$router.push({
					path:'/heroList'
				  })
				   }
			   )
		   }
	},
	mounted(){
		this.getEdit()
	}
}
</script>