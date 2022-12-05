import React, { useState } from 'react'
import { addshop,deleteShop,removeShop } from '../action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import Card from './Card'

const ShopList = () => {
    const [shoplist,setshoplist] = useState({
        shopname:"",
        area: "",
        category: "",
        opening: "",
        closing: ""
    })
    const [text ,setText] = useState('')
    const list = useSelector((state)=>state.shopreducer.list)
    const dispatch = useDispatch()
    const handlechange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setshoplist({...shoplist ,[name]:value})

    }
    const handlesubmit = ()=>{
       dispatch(addshop(shoplist))
       setshoplist({
        shopname:"",
        area: "",
        category: "",
        opening: "",
        closing: ""
       })

    }
  return (
  <div className='bg-purple-500 w-full min-h-screen p-4'>
    <div className='w-[90%] mx-auto'>
    <div className='flex flex-col gap-5 '>
        <h1 className='text-4xl text-white text-center font-bold underline'>Shop List</h1>
        <input value={text} onChange={(e)=>setText(e.target.value )} type='text'  placeholder='  Search By Category , Area , ShopName..' className='  rounded-lg  outline-none bottom-1 py-2 px-4 shadow-lg ' />
    </div>
    <div className='grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 gap-5 justify-between items-center mt-10 bg-black/20 p-4 rounded-lg'>
        <div className='flex flex-col'>
            <label htmlFor='shop' className='text-2xl'>Enter Shop </label>
        <input type='text' placeholder='Enter Shop Name.' required className='outline-none rounded-lg p-1 w-[180px] md:w-[200px] text-2xl ' id='shop' value={shoplist.shopname} name='shopname' onChange={handlechange}/>
        </div>
        <div>
            <h2 className='text-2xl '>Area</h2>
            <select className='py-1 md:p-1 rounded-lg text-2xl ' name='area' value={shoplist.area} onChange={handlechange}>
                <option>Thane</option>
                <option>Pune</option>
                <option>Mumbai Suburban</option>
                <option>Nashik</option>
                <option>Nagpur</option>
                <option>Ahmednagar</option>
                <option>Solapur</option>
            </select>
        </div>
        <div>
            <h2  className='text-2xl' >Category</h2>
            <select className='md:p-1 py-1 rounded-lg text-2xl' name='category' value={shoplist.category} onChange={handlechange}>
                <option>Grocery</option>
                <option>Butcher</option>
                <option>Baker</option>
                <option>Chemist</option>
                <option>Stationary Shop</option>
            </select>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='open'  className='text-2xl'>Opening Time</label>
            <input type='time' id='open' className='w-[120px] outline-none p-1 py-2 rounded-lg' name='opening' value={shoplist.opening} onChange={handlechange}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='close'  className='text-2xl'>Closing Time</label>
            <input type='time' id='close' className='w-[120px] outline-none p-1 py-2  rounded-lg' name='closing' value={shoplist.closing} onChange={handlechange}/>
        </div>
        <button className='w-20 h-20 rounded-full bg-purple-700 hover:bg-purple-900 text-white text-2xl' onClick={handlesubmit}>Add</button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center'>
    {
    list.filter((value)=>{
        if(text ==='')
        { return value}
        else if (value.data.category.toLowerCase().includes(text.toLowerCase())) 
        { return (value)}
        else if (value.data.area.toLowerCase().includes(text.toLowerCase())) 
        { return (value)}
        else if (value.data.shopname.toLowerCase().includes(text.toLowerCase())) 
        { return (value)}
    }).map((cur)=>{
      
        return(
          <Card cur={cur}/>
        )
    })
  }
    </div>
  </div>
  
  </div>
  )
}

export default ShopList