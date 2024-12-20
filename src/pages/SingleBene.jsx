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
import { getBeneficiary } from '../redux/features/beneSlice';

const SingleBene = ({_id}) => {

  const dispatch = useDispatch();
  const { beneficiary } = useSelector((state) => ({ ...state.beneficiary }));
  const { id } = useParams();


  useEffect(() => {

    if (id) {
      dispatch(getBeneficiary(id));
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
              <MDBCard style={{ width: "80%", height: "500px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", backgroundColor:'red'}}>
                <MDBCardBody style={{backgroundColor:'white'}}>
                  <MDBCardTitle></MDBCardTitle>
                  <div className="row" style={{marginBottom:"30px"}}>
                    <div className="col-lg-8 col-md-8 col-8 col-sm-8"></div>
                    <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                      <MDBBtn style={{padding:" 15px 10px"}} className='change-color-hover' color="secondary"  href={'/all_benes'}><i className="fas fa-home mincard"></i> NGO's Dashbord</MDBBtn>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{float:"left", color:'black'}} ><b>First Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{beneficiary.firstName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={{ color:'black'}}><b>Last Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p  style={{float:"left", color:'black'}}>{beneficiary.lastName}</p>
                      </div>
                    </div>
                    <div className="row">
                    
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{beneficiary.date}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={ {color:'black'}}><b>Home Address :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left", color:'black'}}>{beneficiary.address}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={ {color:'black'}}><b>E-mail :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left",color:'black'}}>{beneficiary.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={ {color:'black'}}><b>Phone Number :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left",color:'black'}}>{beneficiary.phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p style={ {color:'black'}}><b>NGO's Details :</b></p>
                      </div>
                      <div className="col-lg-8 col-md-8 col-8 col-sm-8">
                        <MDBInput type="text" textarea rows={4} className="form-control" name="details" id="details" value={beneficiary.details} readonly/>
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

export default SingleBene;
