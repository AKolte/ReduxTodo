import React, { Component } from 'react';
import Task from './Task'


class taskList extends Component {
  

  render() { 
      return (
        <div>
          <ul className="list-group">
            {this.props.tasks
              .filter((task) => this.props.handleFilterTasks(task))
              .map((i) => (
                <Task
                  key={i.title}
                  handleStatusChange={() => this.props.handleSwitchStatus(i)}
                  handleDeleteTask={() => this.props.handleDeleteTask(i)}
                  taskData={i}
                ></Task>
              ))}
          </ul>
        </div>
      );
  }
}
 
export default taskList;