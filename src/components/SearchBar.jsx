import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getQuery(this.state.searchQuery);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="ui search">
            <div className="ui icon input w-full">
              <input
                type="text"
                id="term"
                className="prompt"
                placeholder="Search videos..."
                onChange={(e) =>
                  this.setState({ searchQuery: e.currentTarget.value })
                }
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
