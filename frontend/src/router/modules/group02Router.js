import Group01Layout from "@/layout/group01";
import LearnVue from "@/views/group02/LearnVue";
import LearnServer from "@/views/group02/LearnServer";
import LearnWorkstation from "@/views/group02/LearnWorkstation";
import LearnApplication from "@/views/group02/LearnApplication";

const group02Router = {
	path:"/library",
	name:"Library",
	component:Group01Layout,
	children: [
		{
			path: "",			
			redirect: "/library/vue",
		},
		{
			path: "/library/vue",
			name:"LibraryLearnVue",
			component: LearnVue
		},
    {
			path: "/library/server",
			name:"LibraryLearnServer",
			component: LearnServer
		},
    {
			path: "/library/work",
			name:"LibraryLearnWork",
			component: LearnWorkstation
		},
    {
			path: "/library/app",
			name:"LibraryLearnApp",
			component: LearnApplication
		},
	],
}

export default group02Router;