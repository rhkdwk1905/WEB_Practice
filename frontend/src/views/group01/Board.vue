<template>
	<div>
		<div class="tblWrap">
    		<b-table :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
		</div>
			<div class="btnWrap">
				<div class="right">
					<b-button variant="primary" @click.prevent="gotoWrite()">등록</b-button>
				</div>
			</div>
		<div class="pagingWrap">
			<b-pagination 
				v-model="currentPage"
				:total-rows="rows"
    			:per-page="perPage"
    			aria-controls="my-table">
			</b-pagination>
		</div>
	</div>
</template>

<script>
	export default {
    methods:{
      gotoWrite(){
        this.$router.push({path: '/community/write'});
      }
    },
		computed: {
		},
		data(){
			return {
				perPage: 7,
				currentPage: 3,//pagination 
				items: [
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
                { 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
                { 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
					      { 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 },
          			{ 탭:'공지', 제목: 'Dickerson', 글쓴이: 'Macdonald', 날짜:Date.now(), 조회:60 }
        		]
			}
		},
		mounted() {
		},
		computed: {
			rows(){
				return this.items.length
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tblWrap {
		height: 400px;
	}
</style>
