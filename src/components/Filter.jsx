import React, { Component } from 'react'
import {ButtonGroup} from "react-bootstrap";

class Filter extends Component {
  renderClassName(filter,i){
    if(filter!==i){return "btn btn-default"}
    else{return "btn btn-primary"}
  }
    render() { 
        return (
          <nav className="navbar navbar-light bg-light">
            <ButtonGroup>
              {this.props.filters.map((i) => (
                <button
                  type="button"
                  onClick={() => this.props.handleUpdateFilter(i)}
                  className={this.renderClassName(this.props.filter,i)}
                  key={i}
                >
                  {i}
                </button>
              ))}
            </ButtonGroup>
          </nav>
        );
    }
}
 
export default Filter;