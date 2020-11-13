import Vue from "vue";
import VueRouter from "vue-router";
import group01Router from "./modules/group01Router"
import group02Router from "./modules/group02Router";
import Home from "@/views/main/Home";
import EditUser from "@/views/main/EditUser";
import QnA from "@/views/main/QnA";
import Contact from "@/views/main/Contact";
import Login from "@/views/login/Login";
import SignUp from "@/views/login/SignUp";
import homeLayout from "@/layout/home";
Vue.use(VueRouter);


const constantRoutes = [
	{
		path: "/",
		name: "main",
		component: homeLayout,
		children: [{
			path: "",
			name:"home",
				component: Home,
			},{
			path: "/edituser",
			name:"edituser",
				component: EditUser,
			},{
			path: "/qna",
			name:"qna",
				component: QnA,
			},{
			path: "/contact",
			name:"contact",
				component: Contact,
			},
		]
	},
	{
		path: "/login",
		name: "login",
		component: Login
	},{
		path: "/signup",
		name: "signup",
		component: SignUp
	}
]


const router = new VueRouter({
	mode:"history",
	routes: [
		...constantRoutes,
		group01Router,
		group02Router,
	]
});

export default router;
