import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";

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
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}
