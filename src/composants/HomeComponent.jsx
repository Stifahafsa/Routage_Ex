import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeComponent() {
  return (
    <div>
      <div className="header-banner">
        <h1>Shop in style</h1>
        <h4>with this shop homepage template</h4>
      </div>

     
      <div className="d-flex flex-wrap justify-content-around">
        
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img src="https://via.placeholder.com/450x300" className="card-img-top" alt="Fancy Product" />
          <div className="card-body">
            <h5 className="card-title">Fancy Product</h5>
            <p className="card-text">$ 18.00</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>

       
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img src="https://via.placeholder.com/450x300" className="card-img-top" alt="Special Item" />
          <div className="card-body">
            <h5 className="card-title">Special Item</h5>
            <p className="card-text">
              <del style={{ color: "gray" }}>$20.00</del> <span style={{ color: "grey", fontWeight: "bold" }}>$18.00</span>
            </p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>

      
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img src="https://via.placeholder.com/450x300" className="card-img-top" alt="Sale Item" />
          <div className="card-body">
            <h5 className="card-title">Sale Item</h5>
            <p className="card-text">
              <del style={{ color: "gray" }}>$50.00</del> <span style={{ color: "grey", fontWeight: "bold" }}>$25.00</span>
            </p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>

        
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img src="https://via.placeholder.com/450x300" className="card-img-top" alt="Popular Item" />
          <div className="card-body">
            <h5 className="card-title">Popular Item</h5>
            <p className="card-text">$ 40.00</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;