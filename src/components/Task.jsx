import React, { Component } from 'react';

class task extends Component {
    state = {  }
    render() { 
        let taskData=this.props.taskData;
        
        // console.log(taskData);
        return (
          <div >
            <li className="list-group-item ">
              <input
                type="checkbox"
                className=" "
                onChange={this.props.handleStatusChange}
                checked={this.props.taskData.status}
                key={this.props.taskData.title}
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