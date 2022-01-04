import React, { useRef } from "react"
import "./NewTodoList.css"

type NewTodoType = {
	onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoType> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const todosSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current!.value
		props.onAddTodo(enteredText)
		textInputRef.current!.value = ""
	}

	return (
		<form onSubmit={todosSubmitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={textInputRef} />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	)
}

export default NewTodo
