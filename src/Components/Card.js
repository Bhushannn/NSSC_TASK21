import React from 'react'

export default function card() {
  return (
    <div className="heads">
      <h1 className="heading_pop">Most Popular Products</h1>
    <div className="container2">
      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="tamsolin.jpg"/>
        <div className="food">
          <h5>Tamsul 0.5ml</h5>
          <h4>$100</h4>
        </div>
      </div>

      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="vetpen.jpg"/>
        <div className="food">
          <h5>Vetpen</h5>
          <h4>$50</h4>
        </div>
      </div>

      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="munch.png"/>
        <div className="food">
          <h5>MunchEase</h5>
          <h4>$60</h4>
        </div>
      </div>

      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="protein.jpg"/>
        <div className="food">
          <h5>Protein Powder</h5>
          <h4>$100</h4>
        </div>
      </div>

      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="meter.jpg"/>
        <div className="food">
          <h5>Meter</h5>
          <h4>$80</h4>
        </div>
      </div>

      <div className="card_back shadow-lg p-3 mb-5 bg-white rounded">
        <img className="delight" src="oxymeter.jpg"/>
        <div className="food">
          <h5>Oxymeter</h5>
          <h4>$90</h4>
        </div>
      </div>
    </div>
  </div>
  )
}
