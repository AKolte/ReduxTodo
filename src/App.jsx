import React, { Component } from "react";
import './App.css';
import Tasklist from './components/Tasklist';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import {connect} from 'react-redux';
import * as actions from './actions'; 



class App extends Component {
  state = { 
  id:2,
  filter:"All",
  filters:["All","Completed","Pending"],
  tasks:[
    {title:"Feed Fish", status:false},
    {title:"Bake Cake", status:true}
    ]
  }
 /*
 Functions: 
 switchStatus(task) - Returns Nothing - Changes the status of a given task (parameter) from false to true and vice versa 
 deleteTask(task) - Returns Nothing - Deletes the the given task(parameter) from the Todo List
 filterTasks(task) - Returns Boolean - Based on currently active filter, Tells if a given task(parameter) should be shown or not.
 addTask() - Returns Nothing - Adds the task in the input field to the Todo List.
 */

   

   filterTasks=(task)=>{
    let filter=this.props.filter;
    if(filter==="All"){return true}
    else{
      if(filter==="Completed") {return (task.status)}
      else{return (!task.status) }
    }
  }

   
/*
Returns the following Components:
Filter
AddTask
TaskList
*/ 
  render() { 
    
    return (
      <div>
        <Filter
          filter={this.props.filter}
          handleUpdateFilter={(filter) => this.props.updateFilter(filter)}
          filters={this.props.filters}
        />
        
        <AddTask handleAddTask={(title)=>{if(title.trim()!=="") this.props.addTask(title)}} />
        
        <Tasklist
          tasks={this.props.tasks}
          handleFilterTasks={(task) => this.filterTasks(task)}
          handleSwitchStatus={(task) => this.props.switchStatus(task.id)}
          handleDeleteTask={(task) => this.props.deleteTask(task.id)}
        ></Tasklist>
      </div>
    );
  }
  //sub = store.subscribe(()=>{console.log("STORE")})
}
 
const mapStateToProps = state =>{
  return{
    tasks:state.tasks,
    filter:state.filter,
    filters:state.filters,
  };
}

const mapStateToDispatch=dispatch=>{
  return{
    addTask:(title)=>dispatch(actions.addTask(title)),
    updateFilter:(filter)=>dispatch(actions.updateFilter(filter)),
    switchStatus:(taskId)=>dispatch(actions.statusChange(taskId)),
    deleteTask:(taskId)=>dispatch(actions.deleteTask(taskId)),
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(App);