<template>
	<b-list-group>
		<span class="welcome">유호연님<br>환영합니다!</span>
  		<b-list-group-item cursor: pointer to="/edituser">회원정보수정</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/qna">문의하기</b-list-group-item>
  		<b-list-group-item cursor: pointer to="/contact">Contact</b-list-group-item>
	</b-list-group>
</template> 

<script>
	export default {
		
		data(){
			return {
				
			}
		},
		method: {
			gotoEditUser(){
				this.$router.push({path: '/edituser'});
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