import React,{useState,useContext, useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { toast } from 'react-toastify';
import { login } from '../redux/features/authSlice';

// import { UserContext } from '../App';

function SignIn() {
// const {state,dispatch}= useContext(UserContext);

  // const navigate = useNavigate();
  // const [email,setEmail]=useState("");
  // const [password, setPassword]= useState("");
  const initialState ={
    email: "",
    password:""
}

  const [formValue, setFormValue]= useState(initialState);
  const {loading,error} =useSelector((state)=>({...state.auth}));
  const {email,password} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e)=> {
    let {name,value}= e.target;
    console.log(e,name,value);
    setFormValue({...formValue, [name]: value });
};
console.log(formValue);
  useEffect(()=>{
      error && toast.error(error);
  },[error]);

  const loginUser = async (e) => {
    e.preventDefault();
  if (!email || !password) {
    toast.warning('please fill up all the values');
    return;
  }

  try {
    // const res = await fetch("http://localhost:5000/users/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // });
    dispatch(login({formValue,navigate, toast}));
    // if (!res.ok) {
    //   const error = await res.json();
    //   throw new Error(error.message);
    // }

    // toast.success("login successfully");
    // navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
  }

const alldata=useSelector(state=>state)
console.log(alldata);
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
                <h1 className="h1">Welcome back</h1>
                <h3>
                  We exist to make entrepreneurship easier.
                </h3>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      {/* <button className="btn px-0 text-white bg-green-700 hover:bg-green-500 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                      </button> */}
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Sign in with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form method="POST">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input id="email" type="email" name='email' className="form-input w-full text-gray-300" value={email} onChange={onInputChange} placeholder="you@yourcompany.com" required />                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password" name='password' type="password" className="form-input w-full text-gray-300" value ={password} onChange={(e) => onInputChange(e)} placeholder="Password (at least 10 characters)" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Keep me signed in</span>
                        </label>
                        <Link to="/forget-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full btn-auth" value="signin" onClick={loginUser} name="signin">Sign in</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      

    </div>
  );
}

export default SignIn;