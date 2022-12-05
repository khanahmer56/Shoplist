import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
import { deleteShop } from '../action'
import { useDispatch } from 'react-redux'

const Card = ({cur}) => {
    const dispatch = useDispatch()
  return (
    <div className='w-[300px] min-h-[250px] bg-black/20 mt-10 p-4 flex flex-col gap-3 rounded-2xl' key={cur.id}>
            <h1 className='text-black text-2xl font-bold'>Shop Name: {cur.data.shopname}</h1>
            <h2 className='text-2xl'>Area: {cur.data.area}</h2>
            <h2 className='text-2xl'>Category: {cur.data.category}</h2>
            <p className='text-2xl'>Opening Time: {cur.data.opening}</p>
            <p className='text-2xl'>Closing Time: {cur.data.closing}</p>
            <button className='text-red-500'><BsTrashFill size={30} onClick={()=>{dispatch(deleteShop(cur.id))}}/></button>
          </div>

  )
}

export default Card