import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';

class taskList extends Component {
  state = { 
  id:2,
  filter:"All",
  filters:["All","Completed","Pending"],
  tasks:[
    {title:"Feed Fish", status:false},
    {title:"Bake Cake", status:true}
    ]
  }

  switchStatus=(task)=>{
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].status=task.status?false:true;
    this.setState(tasks);
    console.log(this.state.tasks[index].status)
  }

  deleteTask=(task)=>{
    let tasks = [...this.state.tasks];
    tasks=tasks.filter((i)=>(i!=task));
    this.setState({tasks:tasks});
    console.log(tasks);
  }

  filterTasks=(task)=>{
    if(this.state.filter=="All"){return true}
    else{
      if(this.state.filter=="Completed") {return (task.status)}
      else{return (!task.status) }
    }
  }

  addTask=()=>{
    let title = document.getElementById("newTaskTitle").value;
    let tasks=this.state.tasks;
    tasks.push({title:title, status:false});
    this.setState(tasks);
    console.log(tasks);
  }


  render() { 
      return (
      <div>
          
      <nav className="navbar navbar-light bg-light">
        <div className="btn-group" role="group">
          {this.state.filters.map((i) => (
            <button
              type="button"
              onClick={() => this.setState({ filter: i })}
              className="btn btn-default">
              {i}
            </button>
          ))}
        </div>
      </nav>

      <AddTask
        handleAddTask={this.addTask}
      />

          <ul className="list-group">
            {this.state.tasks
              .filter((task) => this.filterTasks(task))
              .map((i) => (
                <Task
                  handleStatusChange={() => this.switchStatus(i)}
                  handleDeleteTask={() => this.deleteTask(i)}
                  taskData={i}
                ></Task>
              ))}
          </ul>
        </div>
      );
  }
}
 
export default taskList;