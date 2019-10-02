import React, {Component} from 'react';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

class App extends Component {

    constructor(){
        super();
        this.state = {
            title: "Aplication of task",
            numTasks : 1,
            todos
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(index){
        if(! window.confirm('Seguro que deseas eliminar')) return;
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        })
    }

    render() {
        const todos = this.state.todos.map((todo, index) => {
            return (
                <section className="col-md-6 mb-3" key={`todo-${index}`}>
                    <section className="card">
                        <section className="card-body">
                            <span className="badge badge-danger float-right">{todo.priority}</span>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <button className="btn btn-outline-danger" onClick={this.removeTodo.bind(this, index)}>
                                Delete
                            </button>
                        </section>
                    </section>
                </section>
            )
        });

        return (
            <main>
                <Navigation title={todos.length}/>

                <section className="container">
                    <article className="row">
                        <h1>Tasks example with ReactJS</h1>
                    </article>
                    <article className="row">
                        <section className="col-md-4">
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </section>
                        <section className="col-md-8 row">
                            { todos }
                        </section>
                    </article>
                </section>

            </main>)
    }
}

export default App;
