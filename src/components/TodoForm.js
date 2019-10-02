import React, {Component} from 'react'
class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: undefined,
            responsible: undefined,
            description: undefined,
            priority: 'low',
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    handleInput(e){
        const {value, name } = e.target;

        this.setState({
            [name] : value
        });

    }

    render(){
        return (
            <section className="card">
                <article className="card-header">
                    <h2>Register</h2>
                </article>
                <article className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <section className="form-group">
                            <label htmlFor="title" className="title">Title</label>
                            <input type="text" name="title" className="form-control" id="title" onChange={this.handleInput}/>
                        </section>

                        <section className="form-group">
                            <label htmlFor="name" className="name">Responsible</label>
                            <input type="text" name="responsible" className="form-control" id="responsible" onChange={this.handleInput}/>
                        </section>

                        <section className="form-group">
                            <label htmlFor="name" className="name">Description</label>
                            <input type="text" name="description" className="form-control" id="description" onChange={this.handleInput}/>
                        </section>

                        <section className="form-group">
                            <label htmlFor="name" className="name">Priority</label>
                            <select name="priority" id="priority" onChange={this.handleInput} className="form-control">
                                <option value="">-- Select --</option>
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="important">important</option>
                            </select>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-outline-success btn-block">Register</button>
                        </section>
                    </form>
                </article>
            </section>
        )
    }
    
}

export default TodoForm;