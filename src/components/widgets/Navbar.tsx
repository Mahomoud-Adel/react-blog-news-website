import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Dropdown from '../shared/Dropdown';
import Sidebar from '../shared/Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto h-20 flex items-center justify-between flex-col md:flex-row'>
      <div className='flex items-center justify-start w-full md:w-1/6 space-x-8'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-4 '>

            <Button onClick={() => setOpen(true)} size="icon" variant="ghost" className='lg:hidden block'>
              <i className="fa-solid fa-bars text-lg"></i>
            </Button>
            <div className='w-20 md:w-24 '>
              <img src="./logo.png" className='w-full' alt="" />
            </div>
          </div>

          <div className='flex items-center space-x-8 md:hidden '>
            {/* user */}
            <Dropdown />

            <Button variant='ghost' size='icon'>
              <i className="fa-regular fa-bookmark text-lg"></i>
            </Button>
          </div>
        </div>

        <div className='lg:flex items-center gap-5 hidden '>
          <Link to='' className='flex items-center gap-1'>
            <span>Categories</span>
            <i className="fa-solid fa-chevron-down text-[12px]"></i>
          </Link>
          <Link to='' className='flex items-center gap-1'>
            <span>Pages</span>
            <i className="fa-solid fa-chevron-down text-[12px]"></i>
          </Link>
          <Link to=''>
            ContactUs
          </Link>
          <Link to=''>
            AboutUs
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-end space-x-8 w-full md:w-1/2'>

        <div className='bg-gray-100 rounded-md flex items-center w-full justify-between'>
          <Button size="icon" variant='ghost'>
            <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
          </Button>
          <input type="text" placeholder='Search Anything...' className='border-none flex-1 outline-none bg-transparent' />
          <Button size="icon" variant='ghost'>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </Button>
        </div>

        <div className='md:flex items-center space-x-8 hidden '>
          {/* user */}
          <Dropdown />

          <Button variant='ghost' size='icon'>
            <i className="fa-regular fa-bookmark text-lg"></i>
          </Button>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar