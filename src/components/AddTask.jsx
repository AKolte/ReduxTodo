import React, { Component } from 'react'

class AddTask extends Component {
    
    render() { 
        return (
          <div className="col-md-3">
            <div className="input-group">
              <input
                type="text"
                id="newTaskTitle"
                className="form-control"
                placeholder="Add new Task"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="button"
                  onClick={this.props.handleAddTask}
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