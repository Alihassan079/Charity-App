import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBInput
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { getVolunteer } from '../redux/features/volSlice';

const SingleVol = ({_id}) => {

  const dispatch = useDispatch();
  const { volunteer } = useSelector((state) => ({ ...state.volunteer }));
  console.log(volunteer);
  const { id } = useParams();


  useEffect(() => {

    if (id) {
      dispatch(getVolunteer(id));
    }
  }, [id]);

  return (
    <div
      style={{
        marginTop: "80px",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12 col-sm-12">
          <div className="col-lg-10 col-md-10 col-10 col-sm-10">
            <MDBCol>
              <MDBCard style={{ width: "80%", height: "500px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                <MDBCardBody style={{backgroundColor:'white'}}>
                  <MDBCardTitle></MDBCardTitle>
                  <div className="row" style={{marginBottom:"30px"}}>
                    <div className="col-lg-7 col-md-7 col-7 col-sm-7"></div>
                    <div className="col-lg-5 col-md-5 col-5 col-sm-5">
                      <MDBBtn className='change-color-hover' color="secondary"  href={'/all_vols'}><i className="fas fa-home"></i> Volunteer Dashbord</MDBBtn>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>Title :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{volunteer.title}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{float:"left", color:'black'}}><b>First Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{volunteer.firstName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{float:"left", color:'black'}}><b>Last Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{volunteer.lastName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>E-mail :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}} >{volunteer.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>NIC No :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{volunteer.nic}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>Phone Number :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{volunteer.phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>Description :</b></p>
                      </div>
                      <div className="col-lg-8 col-md-8 col-8 col-sm-8">
                        <MDBInput type="text" textarea rows={4} className="form-control" name="details" id="details" value={volunteer.des} readonly/>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
          <div className="col-lg-2 col-md-2 col-2 col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleVol;
