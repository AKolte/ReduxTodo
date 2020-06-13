import React, { Component } from 'react'

class Filter extends Component {
    render() { 
        return (
          <nav className="navbar navbar-light bg-light">
            <div className="btn-group" role="group">
              {this.props.filters.map((i) => (
                <button
                  type="button"
                  onClick={() => this.props.handleUpdateFilter(i)}
                  className="btn btn-default"

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