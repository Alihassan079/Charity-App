import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/features/authSlice';
import decode from "jwt-decode";
import { signIn } from '../redux/api';
import AdminPanel from "../pages/AdminPanel"

// import { UserContext } from '../App';

function Header() {
  // const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = user?.token;
    console.log('user: ',user);

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(setLogout());
      }
    }
    const handleLogout = () => {
      navigate('/home');
      dispatch(setLogout());
    };

    if(user?.result?.type === 'Admin') {
        return (
          <>
            <li>
              <Link to="/adminpanel" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Admin panel</Link>
            </li>
            <li>
              <Link to="/user-requests" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">User Requests</Link>
            </li>
            <li>
              <Link onClick={handleLogout} className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Logout</Link>
            </li>
          </>
        )
      // else {
      //   return (
      //     <>
      //       <li>
      //         <Link to="/adminpanel" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Admin panel</Link>
      //       </li>

      //       {/* <li>
      //       <Link to="/Donate" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Donate</Link>
      //     </li>
      //     <li>
      //       <Link to="/Events" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Events</Link>
      //     </li>
      //     <li>
      //       <Link to="/Blog" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Blog</Link>
      //     </li>

      //     <li>
      //       <Link to="/About" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
      //     </li>
      //     <li>
      //       <Link to="/Contact" className="font-medium text-white hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
      //     </li> */}

      //       <li>
      //         <Link to="/signin" className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Sign in</Link>
      //       </li>
      //       <li>
      //         <Link to="/signup" className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Sign up</Link>
      //       </li>



      //     </>
      //   )
      // }
    }
    else  {
      if (user) {
        return (
          <>
            <li>
              <Link to="/home" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
            </li>

            <li>
              <Link to="/Donate" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Donate</Link>
            </li>
            <li>
              <Link to="/Events" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Events</Link>
            </li>
            <li>
              <Link to="/Blog" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Blog</Link>
            </li>

            <li>
              <Link to="/About" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
            </li>
            <li>
              <Link to="/Contact" className="font-medium text-white hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
            </li>

            <li>
              <Link onClick={handleLogout} className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Logout</Link>
            </li>
          </>
        )

      } else {
        return (
          <>
            <li>
              <Link to="/home" className="font-medium text-white hover:text-gray-200 px-4 md:px-1 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
            </li>

            <li>
              <Link to="/Donate" className="font-medium text-white hover:text-gray-200 px-3 py-3 flex items-center transition duration-150 ease-in-out">Donate</Link>
            </li>
            <li>
              <Link to="/Events" className="font-medium text-white hover:text-gray-200 px-3 py-3 flex items-center transition duration-150 ease-in-out">Events</Link>
            </li>
            <li>
              <Link to="/Blog" className="font-medium text-white hover:text-gray-200 px-3 py-3 flex items-center transition duration-150 ease-in-out">Blog</Link>
            </li>

            <li>
              <Link to="/About" className="font-medium text-white hover:text-gray-200 px-3 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
            </li>
            <li>
              <Link to="/Contact" className="font-medium text-white hover:text-purple-600 px-3 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
            </li>

            <li>
              <Link to="/signin" className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Sign in</Link>
            </li>
            <li>
              <Link to="/signup" className="btn-sm text-white bg-green-700 hover:bg-green-500 ml-3">Sign up</Link>
            </li>
          </>
        )
      }

    }
    
    
  }
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30  " >
      <div className="flex items-center justify-between h-20 ">
        {/* Site branding */}
        <div className="shrink-0 ">
          <div class="top-bar d-none d-md-block">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8">
                  <div class="top-bar-left">
                    <div class="text">
                      <i class="fa fa-phone-alt"></i>
                      <p>+92 300 1326512</p>
                    </div>
                    <div class="text">
                      <i class="fa fa-envelope"></i>
                      <p>alihassan@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="top-bar-right">
                    <div class="social">
                      <a href=""><i class="fab fa-twitter"></i></a>
                      <a href=""><i class="fab fa-facebook-f"></i></a>
                      <a href=""><i class="fab fa-linkedin-in"></i></a>
                      <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop navigation */}

        <div class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm ">
          <div class="navbar-brand ">ServingHumanity</div>
          {/* <img src='logo1.jpeg' className='logo1'></img> */}



          <nav className="hidden md:flex md:grow ">
            <div class="navbar-nav ml-auto">

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">

                <RenderMenu />

              </ul>
            </div>
          </nav>
        </div>


        {/* Mobile menu */}
        <div className="md:hidden">

          {/* Hamburger button */}
          <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          {/*Mobile navigation */}
          <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
            <ul id='nav-1' className="bg-white-800 px-4 py-e" >
              <li>
                <Link to="/signin" className="btn-sm font-medium w-full inline-flex items-center justify-center border border-transparent px-3 py-2 my-2 rounded-sm text-white bg-green-700  hover:bg-green-500 transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm font-medium w-full inline-flex items-center justify-center border border-transparent px-3 py-2 my-2 rounded-sm text-white bg-green-700  hover:bg-green-500 transition duration-150 ease-in-out">Sign up</Link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </header>
  );
}

export default Header;
