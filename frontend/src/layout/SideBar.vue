<template>
	<b-list-group v-if="checkLogin">
		<span class="welcome">{{userName}}님<br>환영합니다!</span>
  		<b-list-group-item cursor: pointer to="/edituser">회원정보수정</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/qna">문의하기</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/contact">Contact</b-list-group-item>
	</b-list-group>

	<b-list-group v-else>
		<span class="welcome" cursor: pointer to="/login">로그인이<br>필요합니다</span>
	</b-list-group>
</template> 

<script>
	export default {
		created(){
			if(this.$store.state.checkLogin == true){
				this.userId = this.$store.state.dataToken.userId;
				this.userName = this.$store.state.dataToken.name;
			}
		},
		data(){
			return {
				userId:"",
				userName:"",
				checkLogin: this.$store.state.checkLogin
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
    width: 200px;
	}
</style>