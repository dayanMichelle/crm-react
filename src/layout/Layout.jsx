import {Outlet, Link, useLocation} from 'react-router-dom'

export const Layout = () => {
  
  const location = useLocation()
 const urlCurrenly = location.pathname  
  return (
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 bg-orange-400 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white' >CRM - Clients</h2>
            <nav className='mt-10'>
                <Link className={`${urlCurrenly == '/clients' ? 'text-orange-700':
                 'text-white'} text-2xl block mt-2 hover:text-orange-700`}
                to='/clients'>Client</Link>
                <Link className={`${urlCurrenly == '/clients/new' ? 'text-orange-700':
                 'text-white'} text-2xl block mt-2 hover:text-orange-700`}
                to="/clients/new">New Client</Link>
            </nav>
        </div>
        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>

          <Outlet />
        </div>
        
     
    </div>
  )
}
