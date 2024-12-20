import React, { useState,useEffect } from 'react';
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../components/Spinner';
import { searchVolunteers } from '../redux/features/volSlice';
import {toast} from "react-toastify";
import jspdf from 'jspdf';
import "jspdf-autotable";
import {useNavigate} from "react-router-dom";
import { deleteUserRequest, getUserRequests } from '../redux/features/userRequests';


const UserRequests = ({ title, firstName, lastName, nic, _id, email, des, phone, imgFile }) => {

    const { userRequests, loading } = useSelector((state) => ({ ...state.userRequests }))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getUserRequests());
    }, []);

    if (loading) {
        return <Spinner />;
    }


    const handleChange= (e)=>{
        e.preventDefault();
        if(search){
            console.log("search");
        //   dispatch(searchVolunteers(search));
          navigate(`/user-requests`);
          setSearch("");
        }else{
          navigate("/user-requests");
        }
      }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user request?")) {
            console.log(id);
            dispatch(deleteUserRequest({ id }));
        }
    };

    return (
        <div className="container" style={{width:'80%'}}>
            <div className="col-12 col-md-12 col-sm-12 col-12" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-6 col-6">
                    <h6 style={{ color:"white", fontSize:"40px"}}>User Requests</h6>
                    </div>
                    <div className="col-6 col-md-6 col-sm-6 col-6   d-flex justify-content-end">
                        <form className='d-flex  input-group w-auto '  onSubmit={handleChange}>
                            <input
                            
                                type="text"
                                className='form-control '
                                placeholder='Search requests'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div data-testid="test-1" style={{marginTop:"5px", marginLeft: "5px"}}>
                            <MDBIcon fas icon='search'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row main-bg" style={{marginBottom:'20px'}}>
                <div style={{ marginTop: "10px" ,  backgroundColor:'white'}}>
                    <table style={{ marginTop: '15px', backgroundColor:'white'}} className="table table-striped table-striped-bg">
                        <thead>
                            <tr >
                                <th scope="col" >No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Message</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userRequests && userRequests.map((item, index) => (
                                <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                    <td >{item.name}</td>
                                    <td>{item.message}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {/* <MDBBtn color="secondary" href={`/edit_vol/${item._id}`}>&nbsp; <i className="fas fa-edit"></i>&nbsp;</MDBBtn> */}
                                        &nbsp;
                                        <MDBBtn color="danger" onClick={() => handleDelete(item._id)}><i className="fas fa-trash-alt"></i>&nbsp;</MDBBtn>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserRequests;