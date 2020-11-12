<template>
	<div>
		<div class="tblWrap">
    		<b-table 
				id="my-table"
    			:items="items"
    			:per-page="perPage"
    			:current-page="currentPage">
			</b-table>
		</div>
			<div class="btnWrap">
				<div class="right">
					<b-button variant="primary" class="normal">등록</b-button>
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

	import boardData from "@/data/boardData";

	export default {
		computed: {
			boardItemList(){
				return boardData;
			}			
		},
		data(){
			return {
				perPage: 7,
				currentPage: 3,//pagination 
                selectedDate: '',//datepicker
				fields: [ {key:'no', label:'번호'}, {key:"title", label:'제목'}, {key:'created', label:'등록일'}, {key: 'hits', label: '조회수'}],
				items: [
          			{ no: 1, title: 'Dickerson', created: 'Macdonald', hits:60 },
          			{ no: 2, title: 'Dickerson', created: 'Macdonald', hits:50 },
          			{ no: 3, title: 'Dickerson', created: 'Macdonald', hits:40 },
					{ no: 4, title: 'Dickerson', created: 'Macdonald', hits:60 },
          			{ no: 5, title: 'Dickerson', created: 'Macdonald', hits:50 },
          			{ no: 6, title: 'Dickerson', created: 'Macdonald', hits:40 },
					{ no: 7, title: 'Dickerson', created: 'Macdonald', hits:60 },
          			{ no: 8, title: 'Dickerson', created: 'Macdonald', hits:50 },
          			{ no: 9, title: 'Dickerson', created: 'Macdonald', hits:40 },
					{ no: 10, title: 'Dickerson', created: 'Macdonald', hits:60 },
          			{ no: 11, title: 'Dickerson', created: 'Macdonald', hits:50 },
          			{ no: 12, title: 'Dickerson', created: 'Macdonald', hits:40 }
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
