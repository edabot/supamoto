import React, { Component } from 'react'
import ScrollTrigger from 'scrolltrigger-classes'
import monthTop from '../img/month_top.png'
import monthBottom from '../img/month_bottom.png'
import monthsClean from '../img/months_clean.png'
import monthsLayer from '../img/months_layer.png'
import Header from './Header.react'

class Home extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function(){
    	var trigger = new ScrollTrigger({
    	  toggle: {
    	    visible: 'visible',
    	    hidden: 'hidden'
    	  },
    	  offset: {
    	    x: 0,
    	    y: 20
    	  },
    	  addHeight: true,
    	  once: false,
    	}, document.body, window);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">

          <div className="spacer"></div>
          <div className="calendar_join">
            <div data-scroll="toggle(.group-together, .group-apart)">
              <div className="hello_top"><img src={monthTop} alt="Logo" /></div>
              <div className="hello_background"></div>
              <div className="hello_message">zone of confusion</div>
              <div className="hello_bottom"><img src={monthBottom} alt="Logo" /></div>
            </div>
          </div>
          <div className="spacer"> </div>
          <div className="calendar_overlay">
            <div className="months_clean"><img src={monthsClean} alt="Logo" /></div>
            <div data-scroll="toggle(.fade-in, .fade-out)">
              <div className="months_layer"><img src={monthsLayer} alt="Logo" /></div>
            </div>
          </div>
          <div className="spacer"> </div>

        </div>
      </div>
    )
  }
}

export default Home
