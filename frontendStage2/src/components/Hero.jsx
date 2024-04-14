import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import OT1 from "../images/img1.jpg";
import OT2 from "../images/img2.jpg";
import OT3 from "../images/img3.jpg";
import OT4 from "../images/img4.jpg";
import OT5 from "../images/img5.jpg";
const Hero = () => {
  return (
    <>
    <section className="py-5  text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className=' fw-bolder 'style={{fontSize:"50px"}}>Welcome to <span className='text-primary'>Tradedu</span></h1>
        <p className="lead text-body-secondary">Our online course on budget saving and investment equips learners with essential strategies and tools to manage finances wisely. Covering topics such as budgeting, saving techniques, and investment fundamentals, this course empowers individuals to make informed decisions for securing their financial future. Join us to embark on a journey towards financial stability and prosperity.</p>
        <p >
          <a href="#" className="btn btn-primary my-2 mx-1">Explore More</a>
          <a href="#" className="btn btn-secondary my-2 mx-1">Contact Us</a>
        </p>
      </div>
    </div>
  </section>
  <h1 className=' fw-bolder 'style={{fontSize:"50px"}}>OUR COURSES</h1>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT1} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Budget saving:</span>Budget saving: Learn effective budgeting techniques to optimize spending and achieve financial goals efficiently.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$40</button>
                  <button type="button" class="btn btn-primary">Paid</button>                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT2} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Investment:</span>Investment: Explore investment fundamentals and strategies to grow wealth and secure financial stability for the future.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$45</button>
                  <button type="button" class="btn btn-primary">Paid</button>                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT3} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Budget saving and investment:</span> Master the art of balancing savings and investments to build a solid financial investment budgetfoundation.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$35</button>
                  <button type="button" class="btn btn-primary">Paid</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT4} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Budget saving:</span>Budget saving: Learn effective budgeting techniques to optimize spending and achieve financial goals efficiently.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$40</button>
                  <button type="button" class="btn btn-primary">Paid</button>                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT5} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Investment:</span>Investment: Explore investment fundamentals and strategies to grow wealth and secure financial stability for the future.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$45</button>
                  <button type="button" class="btn btn-primary">Paid</button>                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={OT1} className="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><span className='text-primary'>Budget saving and investment:</span> Master the art of balancing savings and investments to build a solid financial investment budget foundation.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">$35</button>
                  <button type="button" class="btn btn-primary">Paid</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Hero;
