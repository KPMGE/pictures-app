import "./ImagesList.css";
import React from "react";
import ImageCard from "./ImageCard";

export default class ImagesList extends React.Component {
  render() {
    const fetchedImages = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{fetchedImages}</div>;
  }
}
