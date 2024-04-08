import { useEffect, useState } from "react";

function App() {
	const [UA_todo, UA_setTodo] = useState([]);
	const [UA_userID, UA_setUserID] = useState(1);
	const [UA_fetching, UA_setFetching] = useState(false);

	function UA_handleChange(e) {
		console.log(e.target.value);
		UA_setUserID(e.target.value);
	}

	useEffect(() => {
		UA_setFetching(true);
		console.log("test");
		fetch(`https://dummyjson.com/todos/user/${UA_userID}`)
			.then((res) => res.json())
			.then((data) => {
				UA_setTodo(data.todos);
				UA_setFetching(false);
			});
	}, [UA_userID]);

	return (
		<section>
			<header>
				<h1>TODOS</h1>
				<h2>By Ujjwal Ahuja, 101486748</h2>
			</header>
			<div>
				<label htmlFor="user">Please select an User:</label>
				<select id="user" onChange={UA_handleChange}>
					<option value="1">Arthur</option>
					<option value="2">Lily</option>
					<option value="3">George</option>
				</select>
			</div>
			<main>
				{UA_fetching ? (
					<p>Loading Data</p>
				) : (
					<ul>
						{UA_todo.map((UA_task) => {
							return <li key={UA_task.id}>{UA_task.todo}</li>;
						})}
					</ul>
				)}
			</main>
		</section>
	);
}

export default App;
