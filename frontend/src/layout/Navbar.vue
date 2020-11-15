<template>
      <b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand cursor: pointer to="/">SSEITS</b-navbar-brand>
			<template v-if="menuList && menuList.length">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<template v-for="(item, index) in menuList" >
							<template v-if="item.children">
								<b-nav-item-dropdown :text="item.label" :key="index">
									<b-dropdown-item v-for="(subItem, index) in item.children" :key="'sub_'+index"
										:to="{name:subItem.name}" active-class="active" exact>
										{{subItem.label}}
									</b-dropdown-item>
								</b-nav-item-dropdown>
							</template>
							<template v-else>
								<b-nav-item :key="index"
									:to="{name:item.name}" active-class="active" exact>
									{{item.label}}
								</b-nav-item>
							</template>
						</template>
					</b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-if="checkLogin">
            <b-nav-item key="login" right @click="logout" active-class="active" v-if="this.checkLogin" exact>Logout</b-nav-item>
          </b-navbar-nav>
					<b-navbar-nav class="ml-auto" v-else>
						<b-nav-item right	:to="{name:'signup'}" active-class="active" exact>Sign Up</b-nav-item>
						<b-nav-item right	:to="{name:'login'}" active-class="active" exact>Login</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</template> 
		</b-navbar>
</template> 

<script>
	export default {
    created(){
      this.checkLogin =  this.$store.state.checkLogin
    },
		methods:{
      logout(){
        this.$store.commit('userLogout');
        this.$router.push({path: '/'});
        location.reload();
      }
    },
		data(){
			return {
        checkLogin: this.$store.state.checkLogin,
				 menuList:[
           {
					   name:"home",
             label: "홈"
           },{
             name:"Community",
					   label: "커뮤니티",
					   children:[
               {
						     name:"CommunityBoard",
						     label: "게시판"
					     },{
						     name:"CommunityTodo",
						     label: "진행작업"
					     }]
           },{
             name: "Library",
             label: "Library",
             children:[
               {
						     name:"LibraryLearnVue",
						     label: "Vue"
					     },{
						     name:"LibraryLearnServer",
						     label: "Server"
					     },{
						     name:"LibraryLearnWork",
						     label: "Workstation"
					     },{
						     name:"LibraryLearnApp",
						     label: "Application"
					     }]
           },{
             name: "Contact",
             label: "Contact",
					   children:[
               {
						     name:"ContactLocation",
						     label: "Location"
					     },{
						     name:"ContactMembers",
						     label: "Members"
					   }]
           }]
			}
		}
	}
</script>

<style scoped>  
	.active {
		color:#ffffff !important;
	}
</style>