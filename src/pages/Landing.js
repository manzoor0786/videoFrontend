import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div >
<Container>
  <Row className='mt-5 p-5 mb-5'>
    <Col>
    <div >
      <h1 className='text-white text-center '> UnIq PlAyEr</h1>
      
      <p className='fs-4 mt-4 p-2 text-white'>UNIQ PLAYER provide most or all of the following features. They allow users to organize their multimedia collection, play movies, Add Videos according to User, Easy to access Watch History download content from online  and stream content from the Internet.</p>
      {/* <Link to={'./home'}>
      <button   style={{width:'5rem', textAlign:'center', backgroundColor:'black',color:"white",   }}>Explore</button>
      </Link> */}
   
    </div>
    
    </Col>
    {/* <Col>
    <img className='w-100 ' style={{borderRadius:'10px'}} src='https://i.postimg.cc/W4Cb5BYb/ec36db6a368fcc32d99ccfa383a4f52a.gif' alt=''/>
    </Col> */}
  </Row>
<Row className='mt-5 mb-5 py-5'> 
<h3 className='   text-center me-1'><Link to={'./home'}>
      <button class="b"  style={{width:'7rem', textAlign:'center', backgroundColor:'black',color:"white", height:'4rem',borderRadius:'5px', textDecoration:'none' }}>Explore</button>
  
      </Link></h3>
<Col className='mt-3  ms-5'>

<Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src="https://i.postimg.cc/YSDZYg2J/1-1.gif" />
      <Card.Body >
        <Card.Title><h3 className='text-danger'>Categorize Video</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>

      <Col className='mt-3 ms-5'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/W4Cb5BYb/ec36db6a368fcc32d99ccfa383a4f52a.gif" />
      <Card.Body >
        <Card.Title><h3 className='text-danger'>Manging Videos</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>

      <Col className='mt-3 ms-5'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://i.postimg.cc/YSDZYg2J/1-1.gif' />
      <Card.Body >
        <Card.Title><h3 className='text-danger'>Watch History</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>
</Row>

</Container>

    </div>
  )
}

export default Landing


