import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white' >CRM - Clients</h2>
            <nav className='mt-10'>
                <a className='text-white text-2xl block mt-2 hover:text-blue-300' 
                href='/clients'>Client</a>
                <a className='text-white text-2xl block mt-2 hover:text-blue-300'
                href="clients/new">New Client</a>
            </nav>
        </div>
        <div className='md:w-3/4'>
          <Outlet />
        </div>
        
     
    </div>
  )
}
