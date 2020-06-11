import React, { Component } from 'react';

class task extends Component {
    state = {  }
    render() { 
        let taskData=this.props.taskData;
        let id = "T" + String(taskData.id);
        console.log(taskData);
        return (
          <div>
            <li className="list-group-item md-1">
              <input
                type="checkbox"
                className="md-1"
                onChange={this.props.handleStatusChange}
                defaultChecked={taskData.status}
                id={id}
                />
                {taskData.title}
                <input type="button" 
                className="btn btn-danger" 
                value="Delete" 
                onClick={this.props.handleDeleteTask} />
            </li>
          </div>
        );
    }
}
 
export default task;