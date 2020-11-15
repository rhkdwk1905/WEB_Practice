<template>
	<div>
    <div>
    <b-form-select v-model="Tokens.class" :options="options" class="mt-3"></b-form-select>
		<b-form-input class="input" ref="title" v-model="Tokens.title" placeholder="제목을 입력해 주세요."></b-form-input>
		<p style="white-space: pre-line"></p>
  </div>
		<b-form-textarea ref="contents" class="bigBox" v-model="Tokens.contents" placeholder="내용을 입력해 주세요." rows="6" max-rows="10"></b-form-textarea>
		<p style="white-space: pre-line"></p>
		<span class="lbutton"><b-button variant="primary" @click.prevent="gotoList">목록</b-button> </span>
		<span class="rbutton"><b-button variant="primary" @click="submit">등록</b-button> </span>
	</div>
</template>

<script>
	export default{
    created(){
      this.Tokens.id = this.$store.state.dataToken.userId;
      this.Tokens.name = this.$store.state.dataToken.name;
    },
		data(){
			return{
        options:["잡담", "정보", "작업", "공지", "보고"],
        Tokens:{
          class: "잡담",
		      title: "",
		      id: "",
          name: "",
		      contents: ""
        }
			}
		},
		methods:{
			submit(){
				if(!this.Tokens.title.length > 0){
					alert("제목을 입력하세요.");
					this.$refs.title.focus();
					return;
				}
        if(!this.Tokens.contents.length > 0){
					alert("내용을 입력하세요.");
					this.$refs.contents.focus();
					return;
				}
				this.axios.post('/api/post', { post: this.Tokens })
				.then(function(response) {
					alert('등록되었습니다.');
					this.$router.push({path: '/community/board'});
				})
				.catch(function(error) {
					alert('등록에 실패했습니다.');
				})
				
			}
		},
		computed:{
		}
	}
</script>

<style lang="scss" scoped>
  .mt-3 {
    width: 10%;
    float:left;
  }
  .input {
    width: 88%;
    float:left;
    margin-left: 2%;
  }
	.rbutton{
        float:right;
    }
	.lbutton{
        float:left;
    }
</style>