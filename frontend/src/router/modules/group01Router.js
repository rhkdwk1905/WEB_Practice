import Group01Layout from "@/layout/group01";
import Board from "@/views/group01/Board";
import Todo from "@/views/group01/Todo";
import Write from "@/views/group01/Write";

const group01Router = { 
	path:"/community",
	name:"Community",
	component:Group01Layout,
	children: [
		{
			path: "",			
			redirect: "/community/board",
		},
		{
			path: "/community/board",
			name:"CommunityBoard",
			component: Board,
		},
    {
			path: "/community/todo",
			name:"CommunityTodo",
			component: Todo,
		},
    {
			path: "/community/write",
			name:"CommunityWrite",
			component: Write,
		}
	],
}

export default group01Router;