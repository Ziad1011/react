import React from 'react';
import logo from '../img/Penny-Logo.svg'

function Footer()  {
  return (
  <div className='pt-5'>
      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <div className='mt-3 d-flex'>
            <div md="3" lg="4" xl="3" className='mx-auto mb-4'>
             <img src={logo} alt="" width={150} />
            </div>

            <div md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  E-source
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>    
Procure to Pay
                </a>
              </p>
            </div>
  <div md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blogs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Press
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </div>

            <div md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <div icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <div icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <div icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <div icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer