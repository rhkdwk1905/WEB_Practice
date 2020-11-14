<template>
	<b-list-group v-if="checkLogin">
		<span class="welcome">{{this.userName}}님<br>환영합니다!</span>
  		<b-list-group-item cursor: pointer to="/edituser">회원정보수정</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/qna">문의하기</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/contact">Contact</b-list-group-item>
	</b-list-group>

	<b-list-group v-else cursor: pointer to="/login">
		<span class="welcome">로그인이<br>필요합니다</span>
  		<b-list-group-item>회원정보수정</b-list-group-item>
  		<b-list-group-item>문의하기</b-list-group-item>
  		<b-list-group-item >Contact</b-list-group-item>
	</b-list-group>
</template> 

<script>
	export default {
		created(){
			if(this.$store.state.checkLogin == true){
				this.userId = this.$store.state.userIdToken;
				this.userName = this.$store.state.userNameToken;
				this.checkLogin = true;
			}
		},
		data(){
			return {
				userId:"",
				userName:"",
				checkLogin: false
			}
		},
		method: {
			gotoLogin(){
				alert("로그인을 먼저 진행해주세요");
				this.$router.push({path: '/login'});
			}
		}
	}
</script>

<style scoped>
	b-list-group{
		margin-top: 10px;
		border-bottom: 1px solid;
	}
	
	.welcome{
		border:1px solid gray;
		border-style: outset;
		min-height:90px;
		padding-top:15px;
	}
</style>