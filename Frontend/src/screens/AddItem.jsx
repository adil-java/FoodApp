import React,{useState} from 'react'
import { PrefetchPageLinks } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function AddItem() {
  const [Category, setCategory] = useState(false)
  const handleCategory=()=>{
    setCategory(prev=>!prev);
  }
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='min-w-full min-h-screen flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] object-cover image- '>
      <div className='bg-orange-500 p-8 rounded-lg shadow-lg text-center w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-white mb-6'>Add Items</h2>
        
        <div className='flex flex-col space-y-4 bg-orange-400 p-6 rounded-lg'>
          <div>
            <label className='block text-white mb-2'>Product Name:</label>
            <input 
              type="text" 
              className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500' 
            />
          </div>
          
          <div>
            <label className='block text-white mb-2'>New Category:</label>
            <input 
            disabled={!Category}
              type="text" 
              className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            />
          </div>
          
          <div>
            <label className='block text-white mb-2'>Description:</label>
            <input 
              type="textarea" 
              className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            />
          </div>
          
          <div>
            <label className='block text-white mb-2'>Price:</label>
            <input 
              type="number" 
              className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            />
          </div>
          <div>
            <label htmlFor="">Add New category</label><input type="checkbox" onClick={handleCategory} />
            </div>
          <div>
            <label className='block text-white mb-2'>Select Category:</label>
            <select 
            disabled={Category}
              name="category" 
              className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        
        <div className='mt-6 bg-slate-600 p-6 rounded-lg'>
          <h3 className='text-xl text-white mb-4'>Upload Image</h3>
          <input 
            type="file" 
            className='w-full p-2 text-white bg-orange-600 rounded-md cursor-pointer'
          />
        </div>
        
        <button type='Submit' className='mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
          Submit
        </button>
      </div>
    </div>
    </>

  )
}
