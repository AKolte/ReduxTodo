import React, { Component } from 'react';
import{Button} from 'react-bootstrap';
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
                value={this.state.inputValue}
              />
              <span className="input-group-btn">
                <Button
                  
                  type="button"
                  onClick={()=>{
                    this.props.handleAddTask(this.state.inputValue)
                    this.setState({inputValue:""})
                  }}
                >
                  Add
                </Button>
              </span>
            </div>
          </div>
        );
    }
}
 
export default AddTask;