import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHis, getAllHistory } from '../services/allapis';
import { Trash2 } from 'react-feather';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
function History() {


    const[histories,setHistories]=useState([])
const getHistories=async()=>{
    const {data}=await getAllHistory()
    setHistories(data)
}



// delete history
const removeHistory=async(id)=>{
  const result=await deleteHis(id)
  if (result.status>= 200 && result.status <300){
    
    //refresh history list
    getHistories()
  }
}

useEffect(()=>{
    getHistories()
},[])




  return (
    <div>
      
        <h1 className='text-center p-5'>History</h1>

        <div className='text-end pe-5 pb-3' >
          <Link to={'/home'}>
<button >Go Back</button>

</Link>
</div>

        { histories.length>0?(
        <Table className='w-75 container pb-5 mb-5' striped bordered hover>
      <thead className='text-center fs-5'>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Video Url</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
histories?.map((i,index)=>(
  <tr>
          <td>{index + 1}</td>
          <td>{i.date}</td>
          <td>{i.video_title}</td>
          <td>{i.url}</td>
          <td className='text-center'>
        <Trash2 onClick={()=>{removeHistory(i.id)}}  size={50} className='btn text-black'></Trash2>

        
       </td>
        </tr>
))
}

       
     
      </tbody>
    </Table>):
    <h1 className='text-center'>No Watch Histories</h1>

         } </div>
  )
}

export default History