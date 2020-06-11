import React, { Component } from 'react';
class Counter extends Component {
  state = {
    tasks: [],
    all: true,
  };

  query = "";
  addTask = () => {
    let newTask = document.getElementById("inputTask");
    let repeat = this.state.tasks.map((task) => task.title == newTask.value);

    if (newTask.value != "" && !repeat.includes(true)) {
      let task = { title: newTask.value, status: false };
      this.setState({ tasks: this.state.tasks.concat(task) });
    }
  };

  switchTaskStatus = (index) => {
    // let index = this.state.tasks.indexOf(task);
    console.log(this.state.tasks);
    // let stat = this.state.tasks[index].status;
    let status=this.state.tasks[index].status;
    //this.setState({ task[index].status: status ? false : true });
    console.log(this.state.tasks[index]);
  };

  changeFilter = () => {
    let opt = document.getElementById("filter");
    if (opt.value === "All") {
      this.setState({ all: true });
      console.log(opt.value+" TRUE "+this.state.all);
    } else if(opt.value==="Completed" || opt.value==="Pending") {
      this.setState({ all: false });
      console.log(opt.value + " FALSE " + this.state.all);
    }else{
        console.log("no");
    }
    console.log(opt.value+" "+this.state.all);
  };

  filterTask=(status) =>{
    let  opt=document.getElementById("filter");
    if (opt.value=="All") return true;
    else return true && status;
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" id="inputTask" />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.addTask}
        >
          Add
        </button>

        <div>
          <label for="filter">Filter</label>
          <select id="filter" onChange={this.changeFilter}>
            <option value="Completed">Completed</option>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <ul>
          {this.state.tasks
            .filter((task) => {
                if (this.state.all) return true
            else return (true && this.status)})
            .map((task,index) => (
              <li>
                <label for={task.title.split(" ").join("")}>{task.title}</label>
                <input
                  type="checkbox"
                  id={task.title.split(" ").join("")}
                  defaultChecked={task.status}
                  onChange={()=>this.switchTaskStatus(index)}
                />
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}
 
export default Counter;