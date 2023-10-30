import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ModalHeader } from 'react-bootstrap';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import {Trash} from 'react-feather';
import { addCategory } from '../services/allapis';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

function Categories() {
  
  //state to hold input,id and video array
  const [catInputs,setCatInputs]=useState({
    id:"",
    name:"",
    videos:[]
  })

  const [categories,setCategories]=useState([])



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const setInputs=(e)=>{
  const{value,name}=e.target
  setCatInputs({...catInputs,[name]:value})
}

const addData=async()=>{
  let id=uniqid()
  setCatInputs({...catInputs,["id"]:id})

  const {name}=catInputs
if(name==""){
  toast.error(" Enter caption", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
else{
  //api call
  const result=await addCategory(catInputs)
  if(result.status>=200 && result.status<300){
   setShow(false);
  
   getAllCategories()
   toast.success(`${result.data.name} added`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
}

}
// console.log(catInputs);


const getAllCategories=async()=>{
  const result=await getAllCat()
  if(result.status>=200 && result.status<300){
  setCategories(result.data)
  }
}
// categories
const removeCategory=async(id)=>{
  const result=await deleteCat(id)
  if (result.status>= 200 && result.status <300){
    
    //refresh category list
    getAllCategories()
  }
}





useEffect(()=>{
  getAllCategories()
},[])

const dragOver=(e)=>{
  e.preventDefault()
  console.log("drag st");
}
const dropped=async(e,id)=>{
  console.log("dropped...cat Id -" +id);
  //video id access
  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);
//acess video data 
  const {data}=await getVideo(videoId)
  console.log(data);

  // select dropped category
  const selectedCategory=categories.find(i=>i.id==id)
  console.log(selectedCategory);

  //update category
  selectedCategory.videos.push(data)
  console.log(selectedCategory);

  //api call to update the changed category
  await updateCategory(id,selectedCategory)
  getAllCategories()
}
  return (
    <div>
       <Button onClick={handleShow} variant="primary"  className=' mt-3 ms-5 ' style={{width:'20rem'}}>
        Add Category
      </Button>

      <Accordion style={{width:'20rem'}} className=' mt-3 ms-5 ' >
      <Accordion.Item eventKey="0">
        <Accordion.Header>List Of Categories</Accordion.Header>
        <Accordion.Body>
        {
        categories.length>0?(
          categories.map(i=>(
            // <Link style={{textDecoration:'none'}} to={'/category'}>

            <div droppable
            onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>dropped(e,i.id)}
            className='border mt-2 p-1 '>
              <p className='fs-3'>{i.name}
              </p>
             <div className='text-end'>
             <Trash onClick={()=>{removeCategory(i.id)}} size={55} className='text-danger btn'></Trash>
             </div>
{
  i.videos.map(j=>(
    <img style={{height:'70px',width:'70px',padding:'5px'}}
    src={j.cover_img}
    
    alt=""/>
  ))
}
              </div>
              // </Link>     
               ))
        ):<h1>No categories added</h1>
      }
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
        <Modal.Title><h1 className='m-2 ms-1' style={{color:'cornflowerblue'}}>Add New Category</h1></Modal.Title>

        </ModalHeader>
      <Modal.Body>    
      <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setInputs(e)} name="name" id='catId' />


      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={addData}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
<ToastContainer/>






    </div>
  )
}

export default Categories