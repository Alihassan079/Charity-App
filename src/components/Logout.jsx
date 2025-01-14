import React, { useEffect,useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';
import decode from "jwt-decode";

export const Logout = () => {
    // const {state,dispatch}= useContext(UserContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER",payload:false})
            navigate("/signin", { replace: true });
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    });
    return (
        
            <>
                <h1>logout page</h1>
            </>
        
    )
}
