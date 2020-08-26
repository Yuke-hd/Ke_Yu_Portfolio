import React, { Component } from 'react';
import Slideshow from 'react-slidez';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div >
          <Slideshow
            showIndex
            showArrows
            autoplay
            enableKeyboard
            useDotIndex
            slideInterval={5000}
            defaultIndex={1}
            slides={['images/travel/IMG_4563.JPG', 'images/travel/IMG_1144.JPG', 'images/travel/IMG_2304.JPG', 'images/travel/IMG_3699.JPG']}
            effect={'fade'}
            width={'100%'}
          />
        </div>
      </section>
    );
  }
}