<template>
      <div class="container">
            <div class="row">
                  <div class="col-4"></div>
                  <form class="col-4">
					   <span class="box"></span>
                       <b-form-input v-model="editData.userId" placeholder="ID"></b-form-input>
					   <b-form-input v-model="editData.userEmail" placeholder="이메일"></b-form-input>
					  <b-form-input v-model="editData.phone" placeholder="휴대폰번호"></b-form-input>
					   <b-form-input v-model="editData.name" placeholder="이름"></b-form-input>
					   <b-form-input v-model="editData.studentID" placeholder="학번"></b-form-input>
					   <input type="password" class="password-field form-control d-inline" v-model="editData.password" placeholder="비밀번호">
					   <input type="password" class="password-field form-control d-inline" v-model="editData.confirm" placeholder="비밀번호확인">
					  <b-button variant="primary" @click.prevent="signUp" style="margin:30px;">Sign Up</b-button>
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
												phone:"",
                        name:"",
                      	studentID:"",
                        password:"",
	                      confirm:""
                     } 
               }
         },
         
         methods:{
               signUp(){
				   if(this.editData.password != this.editData.confirm){
					   alert('비밀번호가 일치하지 않습니다.');
					   return;
				   }
				   this.$http.post('/api/signUp', {
					   user: this.editData
				   })
				   .then((response)=>{
					   if(response.data == 'duplicate_id'){
						   alert('이미 존재하는 아이디입니다')
					   }
					   if(response.data == 'save_signup'){
						   alert('회원가입을 환영합니다!')
						   this.$router.push('/login')
					   }
				   })
				   .catch(function(error){
					   alert('error')
				   })
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