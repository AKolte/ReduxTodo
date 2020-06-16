import React, { Component } from 'react'
import {ButtonGroup, Button} from "react-bootstrap";

class Filter extends Component {
  renderClassName(filter,i){
    if(filter!==i){return "default"}
    else{return "primary"}
  }
    render() { 
        return (
          <nav className="navbar navbar-light bg-light">
            <ButtonGroup>
              {this.props.filters.map((i) => (
                <Button
                  bsStyle={this.renderClassName(this.props.filter,i)}
                  type="button"
                  onClick={() => this.props.handleUpdateFilter(i)}
                  
                  key={i}
                >
                  {i}
                </Button>
              ))}
            </ButtonGroup>
          </nav>
        );
    }
}
 
export default Filter;