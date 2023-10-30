import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'

function View(updatedState) {

  const[allVideos,setAllVideos]=useState([])

//state to update delete
const [deleteUpdate,setDeleteUpdate]=useState({})

  const accessAllVideos=async()=>{
    const result= await getAllVideos()
    if(result.status>=200&&result.status<300){
      setAllVideos(result.data)
      // console.log(result);
    }
  }

useEffect(()=>{
   accessAllVideos()
},[updatedState,deleteUpdate])

console.log(allVideos);


  return (
    <Row>
      {
        allVideos.length>0?(
          allVideos.map(i=>
        <Col lg={4} md={6} >   <Videocard deleteUpdate={setDeleteUpdate} video={i}></Videocard> </Col>
            )
        ):<h1>No videos in your collection</h1>

}
      
      </Row>
    )
  }
  
  export default View