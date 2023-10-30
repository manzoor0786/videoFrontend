import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";

// add videos
export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

//get all videos
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}
//delete video
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category
export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}
//get all categories
export const getAllCat=async()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

//category delete

export const deleteCat=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

//add history

export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}

//get all histories
export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}

//delete history
export const deleteHis=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}

//access single video
export const getVideo=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

//update category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}
// single category
export const getCat=async (categId)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${categId}`,{})
}
