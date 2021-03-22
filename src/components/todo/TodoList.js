import React, { Fragment, Component } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import './TodoList.css';
import Divider from "../divider/Divider";

class TodoList extends Component {
    constructor(props) {
        const [item1, item2, ...rest] = [
            "Write some code",
            "Change the world",
            "Take a nap",
            "Eat a cookie"
        ];
        super(props);
        // this.state = { items: ['Item #1', 'Item #2', 'Item #3'] };
        // this.addTodo = this.addTodo.bind(this);
        // this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            items: [item1, item2, rest.join(" and ")]
        };

    }

    addTodo(item) {
        this.setState({ items: [...this.state.items, item] });
    }

    removeTodo(removeItem) {
        const filteredItems = this.state.items.filter(description => {
            return description !== removeItem;
        });
        this.setState({ items: filteredItems });
    }

    renderItems() {
        return this.state.items.map(description => (
            <Fragment key={"item-" + description}>
                <Todo 
                    key={description} 
                    description={description}
                    removeTodo={this.removeTodo}
                />
                <Divider key={"divide-" + description} />
             </Fragment>
        ));
    }

    render() {
        return (
            <div className="TodoList">
                <NewTodo addTodo={this.addTodo}/>
                {this.renderItems()}
            </div>
        );
    }
}

export default TodoList;