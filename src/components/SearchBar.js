import React from "react";

export default class SearchBar extends React.Component {
  state = { text: "" };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.text}
              type="text"
              onChange={(event) => this.setState({ text: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
