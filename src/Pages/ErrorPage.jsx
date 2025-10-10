import React from 'react';
import { useRouteError } from 'react-router';
import Footer from '../Component/footer';
import Navbar from '../Component/navber';
import errorImg from "../assets/error-404.png"
const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div>
     <Navbar/>

       <div className='flex flex-col items-center justify-center min-h-[60vh] text-center mt-10 py-5 pb-50'>
        <img src={errorImg} alt="" />
        <div className='text-sm text-gray-400'>
          {error?.message || <div><h1 className='text-purple-800 text-3xl font-bold'>OPPS!! PAGE NOT FOUND</h1>
       <br />
       <p>The App you are requesting is not found on our system. Please try another app.</p></div> }
        
        <a href='/' className='btn btn-primary mt-6'>Go Back</a>
         </div>
      </div>
      <Footer></Footer>

    </div>
    );
};

export default ErrorPage;