import React,{Component,PropTypes} from 'react'


export default class MainSection extends Component {
	constructor(props,context) {
		super(props,context)
		this.state={

		}
	}
	render(){
		return (
			<section className="main">
		        {this.renderToggleAll(completedCount)}
		        <ul className="todo-list">
		          {filteredTodos.map(todo =>
		            <TodoItem key={todo.id} todo={todo} {...actions} />
		          )}
		        </ul>
		        {this.renderFooter(completedCount)}
	      	</section>
		)
	}
}