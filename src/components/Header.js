import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
   <Link to={"/"}  style={{textDecoration:'none'}}>     
    <Navbar.Brand >
            <img
              src="https://i.postimg.cc/02VQLZ7c/61218851-video-camera-logo-design-template-vector-illustration.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />{''}
            <b className='b1 p-1 mt-2 '> UnIq PlAyEr </b>
          </Navbar.Brand>
       </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header