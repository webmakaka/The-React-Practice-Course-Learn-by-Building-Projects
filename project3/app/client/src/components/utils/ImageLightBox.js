import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImageLightBox extends Component {
  state = {
    lightboxIsOpen: true,
    currentImage: this.props.pos,
    images: []
  };

  static getDerivedStateFromProps(props, state) {
    if (props.images) {
      const images = [];
      props.images.forEach(element => {
        images.push({ src: `${element}` });
      });

      return (state = {
        images
      });
    } else {
      return false;
    }
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  closeLightBox = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={() => this.gotoPrevious()}
        onClickNext={() => this.gotoNext()}
        onClose={() => this.closeLightBox()}
      />
    );
  }
}

export default ImageLightBox;
