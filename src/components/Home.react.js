import React, { Component } from 'react'
import ScrollTrigger from 'scrolltrigger-classes'
import monthTop from '../img/month_top.png'
import monthBottom from '../img/month_bottom.png'
import WithoutDivider from '../img/month_without_divider.png'
import Divider from '../img/divider.png'
import monthsClean from '../img/months_clean.png'
import monthsLayer from '../img/months_layer.png'
import Header from './Header.react'
import Products from './Products.react'

const addTrigger = () => {
  let trigger = new ScrollTrigger({
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
}

class Home extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', addTrigger);
    console.log('added')

    // var start = null;
    // var element = document.getElementsByClassName('navbar')[0];
    // element.style.position = 'absolute';
    //
    // function step(timestamp) {
    //   if (!start) start = timestamp;
    //   console.log(window.scrollY)
    //   window.requestAnimationFrame(step);
    // }
    //
    // window.requestAnimationFrame(step);
  }
  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', addTrigger)
    console.log('removed')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2>The future can be confusing</h2>
          <p>We turn to calendars to help us plan out our hectic lives. And yet, calendars make this difficult with their stubborn rules. The biggest problem is that of the idea of the month. They seem innocent, but they cause big problems.</p>
          <p>The month imposes itself on our plans. Calendars separate months with pages or gaps. This forces us to apply some mental effort to see what the next two weeks will look like. If you've ever been surprised by some event in the beginning of a month because you couldn't see it easily, you know the problem.</p>
          <h2>Fix the gap</h2>
          <p>The solution is pretty simple: get rid of the gap. Just push the months together and reconnect the broken weeks. Now you have a consistently clear two-week view ahead of you.</p>
          <p>As for separating the months, just add color.</p>

          <div className="calendar_join">
            <div data-scroll="toggle(.group-together, .group-apart)" className="group-together">
              <div className="hello_top"><img src={monthTop} alt="top month" /></div>
              <div className="hello_background"></div>
              <div className="hello_message">zone of confusion</div>
              <div className="hello_bottom"><img src={monthBottom} alt="bottom month" /></div>
            </div>
          </div>
          <p>To make the months clearer for looking at it up close, and for those for whom colors may be a problem, there's a small divider placed between each month.</p>

          <div className="divider_overlay">
            <div className="months_clean"><img src={WithoutDivider} alt="months without divider" /></div>
            <div data-scroll="toggle(.fade-in, .fade-out)" className="fade-in">
              <div className="months_layer"><img src={Divider} alt="divider" /></div>
            </div>
          </div>
          <h2>Add some shading</h2>
          <p>With the months in one large column the problem now is knowing what month and day of the week you're looking at. To make this clearer, an overlay is added. The weekends are also shaded to help mark out Monday to Friday.</p>
          <div className="calendar_overlay">
            <div className="months_clean"><img src={monthsClean} alt="months without overlay" /></div>
            <div data-scroll="toggle(.fade-in, .fade-out)" className="fade-in">
              <div className="months_layer"><img src={monthsLayer} alt="month and weekend overlay" /></div>
            </div>
          </div>
          <h2>Go for the whole year</h2>
          <p>
            These calendars are printed out large at 24" by 36" (a little bigger than A1) and 12" x 18" (a touch bigger than A3). There are portrait and landscape options and you can start the week on Monday or Sunday.
          </p>
          <a href="" className="">Buy now</a>
          <Products />
        </div>
      </div>
    )
  }
}

export default Home
