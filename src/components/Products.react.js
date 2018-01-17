import React from 'react'
import Regular from '../img/calendar.jpg'
import RegularLand from '../img/calendar_land.jpg'
import Euro from '../img/calendar_euro.jpg'
import EuroLand from '../img/calendar_euro_land.jpg'
import Mini from '../img/calendar_1218.jpg'

const Products = () => (

  <div className="products">
    <div className="product">
      <a href="https://supamoto.co/products/2018-calendar">
        <img src={Regular} alt="Regular calendar" />
        <div className="product-title">
          2018 Calendar
        </div>
      </a>
    </div>
      <div className="product">
        <a href="https://supamoto.co/products/2018-calendar-landscape">
          <img src={RegularLand} alt="Regular landscape calendar" />
          <div className="product-title">
            2018 Calendar - Landscape
          </div>
        </a>
    </div>
      <div className="product">
        <a href="https://supamoto.co/products/2018-calendar-monday-start">
          <img src={Euro} alt="Euro Monday start calendar" />
          <div className="product-title">
            2018 Calendar - Euro - Monday start
          </div>
        </a>
    </div>
      <div className="product">
        <a href="https://supamoto.co/products/2018-calendar-euro-monday-start-landscape">
          <img src={EuroLand} alt="Euro Monday start landscape calendar" />
          <div className="product-title">
            2018 Calendar - Euro - Monday start - landscape
          </div>
        </a>
    </div>
      <div className="product">
        <a href="https://supamoto.co/products/2018-calendar-mini-12-x-18">
          <img src={Mini} alt="Mini calendar" />
          <div className="product-title">
            2018 Calendar - Mini - 12" x 18"
          </div>
        </a>
    </div>
  </div>
)

export default Products
