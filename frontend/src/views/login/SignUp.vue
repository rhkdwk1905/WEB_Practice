<template>
      <div class="container">
            <div class="row">
                  <div class="col-4"></div>
                  <form class="col-4">
					   <span class="box"></span>
                       <b-form-input v-model="userId" placeholder="ID"></b-form-input>
					   <b-form-input v-model="userEmail" placeholder="이메일"></b-form-input>
					  <b-form-input v-model="phoneNumber" placeholder="휴대폰번호"></b-form-input>
					   <b-form-input v-model="text" placeholder="이름"></b-form-input>
					   <b-form-input v-model="text" placeholder="학번"></b-form-input>
					   <input type="password" class="password-field form-control d-inline" v-model="text" placeholder="비밀번호">
					   <input type="password" class="password-field form-control d-inline" v-model="text" placeholder="비밀번호확인">
					  <b-button variant="primary" @click.prevent="onLogin" style="margin:30px;">Sign Up</b-button>
                  </form>
                  <div class="col-4"></div>
            </div>
      </div>
</template>
 

<script>
      export default {
         data(){
               return {
                     editData:{
                        userId:"",
                        userEmail:"",
						phoneNumber:"",
                        name:"",
						studentID:"",
                        password:"",
						passwordConfirm:""
                     } 
               }
         },
         
         methods:{
               onLogin(event){                     
                  console.log("login 시도 ", this.editData);
               }
         }
      }
</script>


<style lang="scss" scoped>
	.box{
		padding: 30px;
	}
	
	input{
		padding: 10px;
		margin-top: 20px;
	}
</style>