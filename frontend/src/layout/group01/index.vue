<template>
	  	<div class="layout01">
			<section class="container">
				<div class="nav-wrap" >
					<navbar></navbar>
				</div>
			
				<div class="content-wrap">
					<sidebar></sidebar>
					<app-main class="contents"></app-main>
				</div>
			</section>
		</div>


</template>

<script>
import { AppMain } from "./components";
import Navbar from "../Navbar";
import Sidebar from "../SideBar"
 
export default {
      components:{
            AppMain,
            Navbar,
            Sidebar
	  }
	  
}
      
</script>

<style lang="scss" scoped>
      .app-wrapper {
            display:flex;
            flex-direction: column;
            border:1px solid #ff0000;

            .side-bar-container {
                  width:200px;
                  border:1px solid #ff0000;
            }
            .main-container {
                  flex:1;
                  .nav-bar {
                        height:40px;
                  }
            }
      }
</style>