import React from "react";
import { TodoList } from "./TodoList.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-color-secondary text-center">TODOS</h1>
			<TodoList/>
		</div>
	);
};

export default Home;
