import React from 'react'

export default function Bgimg() {
    return (
      <div className="banner">
        <div className="container_flex">
          <div>
            <h3 className="main_heading">Reliable on time home delivery</h3>
          </div>
          <div>
            <h2 className="second_heading">
              Our in-house pharmacist ensure your medicines reach you when you
              need them.
            </h2>
          </div>
          <div className="searchBar">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Medicines"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          
        </div>
      </div>
    );
}
