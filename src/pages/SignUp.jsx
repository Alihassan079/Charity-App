import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { toast } from 'react-toastify';
import { register } from '../redux/features/authSlice';
import { useDispatch } from 'react-redux';


function SignUp() {
  const dispatch = useDispatch();
  const initialState = {
    name: "", companyname: "", email: "", password: "", type: ""
  }
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, companyname, type } = formValue;

  const navigate = useNavigate();
  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.name, e.target.value)
    name = e.target.name;
    value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    if (email && password && password && companyname) {
      dispatch(register({ formValue, navigate, toast }));
    } else {
      toast.warning('please fill all the details')
    
    }
    // try {
    //   const {name,companyname,email,password,type}=user;
    //   if(!name,!companyname,!email,!password,!type){
    //   //  alert('please fill up all the values ')
    //    toast.warning('please fill up all the values ')
    //    return
    //   }
    //   const res=await fetch("http://localhost:5000/users/signup",{
    //    method:"POST",
    //    headers:{
    //      "Content-Type" : "application/json"
    //    },
    //    body: JSON.stringify({
    //      name,companyname,email,password,type
    //    })
    //   });
    //   if(res.status == 400){
    //     console.log(res);
    //     toast.error("Email is already exist")
    //     return
    //   }
    //   const data =await res.json();
    //   console.log(data);
    //   if (data.status==400 || !data){
    //     console.log("something went wrong");
    //     toast.error(res.statusText)
    //    }else{
    //     console.log("suceess value");
    //     toast.success("register successfully")
    //     navigate("/signin");
    //    }
    // } catch (error) {
    //   console.log('catc',error);
    // toast.error(error)
    // }
  
   
    // if (data.status == 400 || !data) {
    //   console.log("something went wrong");
    //   toast.error(res.statusText)
    // } else {
    //   console.log("suceess value");
    //   toast.success("register successfully")
    //   navigate("/signin");
    // }

  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome. We exist to make entrepreneurship easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                {/* <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-green-700 hover:bg-green-500 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                      </button>
                    </div>
                  </div>
                </form> */}
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Register with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form method='POST'>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-red-600">*</span></label>
                      <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" autocomplete="off" value={formValue.name} onChange={handleInputs} name='name' required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
                      <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" value={formValue.companyname} onChange={handleInputs} name='companyname' required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" value={formValue.email} onChange={handleInputs} name='email' required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" value={formValue.password} onChange={handleInputs} name='password' required />
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="type">Type<span className="text-red-600">*</span></label>
                      <select onChange={handleInputs} id="type" className="form-input w-full text-gray-300" name='type' placeholder="Select User Type" required >
                        <option >Admin</option>
                        <option >User</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="text-sm text-gray-500 text-center">
                    I agree to be contacted by Open PRO about this offer as per the Open PRO <Link to="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-700 hover:bg-purple-600 w-full btn-auth" value="signup" onClick={PostData}>Sign up</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Already using Open PRO? <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>



    </div>
  );
}

export default SignUp;