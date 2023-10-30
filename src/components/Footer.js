import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-3  p-5 " >
      <div className="m-0 ">
        <p className="fs-4 m-0">
          <i className="fa-solid fa-photo-film me-2"></i> UnIq PlAyEr
        </p>
        <div className='d-block align-items-center justify-content-center mt-3 d-md-flex mb-2 mb-md-0 socials'>
          <h5 className='mt-2 me-3'>Connect with us</h5>
          <a href='#' className=' fs-5'><i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i></a>
          <a href='#' className='ms-3 fs-5'><i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></a>
          <a href='#' className='ms-3 fs-5'><i className="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></a>
        </div>
      </div>
      <p className=" text-start">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci autem
        nesciunt minima esse reprehenderit corrupti ab repudiandae perspiciatis.
        Ut, omnis.
      </p>
      <p className="rights bg-light text-black w-100 py-1">
        ©All rights reserved
      </p>
    </footer>
  );
}

export default Footer