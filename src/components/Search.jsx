import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  //

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn blue-grey darken-4"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            <i className="small material-icons ">search</i>
            search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
