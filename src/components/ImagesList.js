import React from "react";

export default class ImagesList extends React.Component {
  render() {
    const fetchedImages = this.props.images.map(({ id, description, urls }) => {
      return <img key={id} src={urls.regular} alt={description} />;
    });

    return <div>{fetchedImages}</div>;
  }
}
