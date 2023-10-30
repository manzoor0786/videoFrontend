import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import format from 'date-fns/format';
import RiDeleteBin6Line from 'react-icons/ri'




function Videocard({video,deleteUpdate}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
      setShow(true);
      //body
      //id
      var id=uniqid()
      //title
var video_title=video.caption

//url
var url=video.video_url

//date
var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
// console.log(date);
const body={id,video_title,url,date}
if(body){


      //api call
const result=await addHistory(body)
}
    }

const handleDelete=async(id)=>{
  const result=await deleteVideo(id)
  if(result.status>=200 && result.status<300){
    deleteUpdate(result.data)
  }
 

}

const dragStart=(e,id)=>{
  console.log("drag started ... source card id-"+id);
  //store dragged data
  e.dataTransfer.setData("cardId",id)
}

  return (
    <div>
       

      <Card  draggable onDragStart={(e)=>dragStart(e,video.id)}  className='mt-3 ms-5'style={{ width: '17rem' }}>
      <Card.Img variant="top" src={video.cover_img}  onClick={handleShow} style={{height:'15rem'}} />
      <Card.Body style={{backgroundColor:'white', color:'rgb(1, 2, 9)'}}>
        <Card.Text>
        {video.caption}
        </Card.Text>
         <Button onClick={()=>handleDelete(video.id)}  style={{backgroundColor:'lightblue',border:0}}  variant="outlined" className='ms-auto'> delete</Button> 

   


      </Card.Body>
    </Card>






      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe 
            width="100%" 
            height="300" 
            src={video.video_url} title="Tamil × Malayalam Lofi songs ~ malayalam cover songs ~ tamil cover songs ~ malayalam lofi.tamil lofi" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="vidId"></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          
          
          </Modal.Footer>
        </Modal>
      </div>
    
  )
}

export default Videocard