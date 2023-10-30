import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'
function Home() {
  return (

    

    <div className='mt-5'>
        <h1 className='ms-5 ps-5 mb-5 text-white'>Start Uploading Videos</h1>
<div className='m-5 fs-3 ps-5  '>

<Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>
<button class="button-53" role="button">View Watch History</button>
      </Link>


</div>




<Col>
<img></img>
</Col>



<Row>

<Col lg={1} >
<Add></Add>
</Col>


<Col lg={3}>
<Categories></Categories>
</Col>

<Col lg={7}>
<View></View>

</Col>






</Row>



    </div>
  )
}

export default Home