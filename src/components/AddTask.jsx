import React, { Component } from 'react'

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state={
      "inputValue":""
    }
  }  
  
  updateNewTaskTitle(){
    
    }
    render() { 
        return (
          <div className="col-md-3">
            <div className="input-group">
              <input
                onChange={(evt) =>
                  this.setState({ inputValue: evt.target.value })
                }
                type="text"
                id="newTaskTitle"
                className="form-control"
                placeholder="Add new Task"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="button"
                  onClick={()=>this.props.handleAddTask(this.state.inputValue)}
                >
                  Add
                </button>
              </span>
            </div>
          </div>
        );
    }
}
 
export default AddTask;