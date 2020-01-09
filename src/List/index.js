
import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '',
      date: new Date().toLocaleString()
    
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    
  
    render() {
      return (
        <div style={{margin:'100px'}}>
          <h3>{this.state.date}</h3>
         
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            
            <textarea
              className="form-control" type="text" rows="4" placeholder="Secretul meu"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              <span className="glyphicon glyphicon-chevron-right"></span>
              Page #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ol className="list-group list-group-flush">
          {this.props.items.map(item => (
            <li className="list-group-item" key={item.id}>{item.text}</li>
          ))}
        </ol>
      );
    }
  }


  export default TodoApp;