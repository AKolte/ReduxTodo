import React, { Component } from 'react'

class Filter extends Component {
  renderClassName(filter,i){
    if(filter!==i){return "btn btn-default"}
    else{return "btn btn-primary"}
  }
    render() { 
        return (
          <nav className="navbar navbar-light bg-light">
            <div className="btn-group" role="group">
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
            </div>
          </nav>
        );
    }
}
 
export default Filter;