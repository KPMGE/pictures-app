import React from "react";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  onSearchSubmit(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
