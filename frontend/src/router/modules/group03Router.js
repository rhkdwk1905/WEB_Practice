import Group01Layout from "@/layout/group01";
import Members from "@/views/group03/Members";
import Location from "@/views/group03/Location";

const group03Router = { 
	path:"/contact",
	name:"Contact",
	component:Group01Layout,
	children: [
		{
			path: "",			
			redirect: "/contact/location",
		},
		{
			path: "/contact/location",
			name:"ContactLocation",
			component: Location,
		},{
			path: "/contact/members",
			name:"ContactMembers",
			component: Members,
		},
	],
}

export default group03Router;