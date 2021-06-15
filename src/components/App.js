import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (text) => {
    try {
      const response = await unsplash.get("/search/photos", {
        params: { query: text },
      });

      this.setState({ images: response.data.results });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h2>Found {this.state.images.length} images</h2>
      </div>
    );
  }
}
