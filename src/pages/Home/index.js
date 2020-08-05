import React from 'react';
import './index.css';

function Home() {
  return (
    <div className="container">
        <div className="pane">
          <h1>Powder Coating. Sand Blasting. Acid Washing. Color.</h1>
          <br />
          {/* <a className="paneBtn">
            All Services <i class="fas fa-sign-in-alt"></i>
          </a> */}
          <br />
          <div className="paneContent">
            {/* <p>Pricing starts at a $30.00 minimum</p> */}
            <p>
              $30.00 minimum
            </p>
            <p>
              $26.00 blast/powder that are already coated.
            </p>
            <p>
              $300.00 rims. Solid color
            </p>
            <p>
              $14.00 for sand blast, primer and powder, raw stee
            </p>
            <p>
              $12.00 for sand blast and color.
            </p>
            <p>
              $10.00 Acid wash and color.  
            </p>
            <p>
              $7.00 per square foot, for blasting and powder.
            </p>
            <p>
              $3.50 per square foot sand blasting.
            </p>
            <p>
              $5.00 per linear foot sand blasting
            </p>
            <p>
              $10.00 per linear foot sand blasting coated metal
            </p>
            <p>
              $7.00 per square foot, for blasting already coated metal.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Home;
