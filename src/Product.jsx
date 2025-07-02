import React, { useState, useEffect } from "react";




export default function Product(data){
  return (
    <div className="max-w-46 bg-white relative p-2">
      <img className="w-full h-56" 
        src={data.image}/>
      <h1 className="text-gray-400 text-xs py-1">{data.title}</h1>
      <p className="text-sm pb-1 font-medium">{data.description}</p>
      {data.sale==="Sale" && 
        (<p className="inline text-xs text-gray-400 mr-1">{data.saleprice}</p>)}
      <p className="text-xs font-medium inline">${data.price}</p>
      {data.sale==="Sale" && 
        (<a className="bg-red-400 text-xs rounded-full self-center h-8 w-8 pr-2 pl-1 pt-2 absolute top-0 right-0 ">{data.sale}</a>)}
    </div> 
  )
}
