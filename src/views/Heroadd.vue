<template>
	<div class="hore-add">
		<h3>添加英雄</h3>
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
					<button class="btn btn-primary" @click="add">添加</button>
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
                gender:'男',
            }
        }
    },
     methods:{
         add(){
             let {name,gender} = this.formData 
             Axios.post(
                   'http://localhost:6006/heroList',{
                      name:name ,
                      gender:gender,
                      time:new Date()


                   }).then((res)=>{
                       this.$router.push({
                          path:'/heroList' 
                       })
                   })
         }
     }
}
</script>