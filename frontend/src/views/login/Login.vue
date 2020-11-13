<template>
      <div class="container">
            <div class="row">
                  <div class="col-4"></div>
                  <form class="col-4">
                        <div class="form-group">
                              <label class="box">User id</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							  	v-model="editData.userId"
							  >
                              <small id="emailHelp" class="form-text text-muted">성균관대학교 아이디와 연동되지 않습니다.</small>
                        </div>
                        <div class="form-group">
                              <label class="box">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1"
							  v-model="editData.password"
							  >
                        </div>
                        <div class="form-group form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1">
                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
                        <b-button variant="primary" @click.prevent="onLogin">Login</b-button>
					  	<span class="signupbutton"></span>
					    <b-button variant="primary" :to="{name:'signup'}">Sign Up</b-button>
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
                        password:""
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
		padding: 10px;
		padding-top: 30px;
	}
	
	.signupbutton{
		padding-left: 10%;
	}
</style>