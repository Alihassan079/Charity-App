import React from 'react';
// import home from "../assets/homeView.jpg";
import Footer from "../partials/Footer";
import Header from '../partials/Header';

const AdminPanel = () => {
    return (
		
        <div class=" flex flex-col min-h-screen overflow-hidden">
		<Header />
		
            <div className="image ">
                {/* <img src={home} alt="home image" style={{width:"100%", maxHeight:"700px" , opacity:"0.6", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/> */}
            </div>
            <div className="row" style={{ marginTop: "220px", marginBottom:"30px" }}>
                {/* <div class="col-lg-12 col-md-12 col-12 col-sm-12"> */}
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
                        <div class="col-lg-6 col-md-6 col-6 col-sm-12">
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="col-lg-12 col-md-12 col-12 col-sm-4">
                                    <a href='/all_donors'>
                                        <div class="card">
                                            <div class="card-body">
                                                <p class="card-text" >Sponsor Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12 col-sm-4">
                                    <a href='/all_vols'>
                                        <div class="card">
                                            <div class="card-body">
                                                <p class="card-text" >Volunteer Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12 col-sm-4">
                                    <a href='/all_benes'>
                                        <div class="card">
                                            <div class="card-body">
                                                <p class="card-text">NGO's Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12 col-sm-4">
                                <a href='/all_donations'>
                                        <div class="card">
                                            <div class="card-body">
                                                <p class="card-text">Donations Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            {/* <div class="row">
                          
                            
                            </div> */}
                        </div>
                        <div class="col-lg-2 col-md-2 col-3 col-sm-2"></div>
                    </div>
                    
                </div>
            {/* </div> */}
                <Footer />
        </div>
    );
};

export default AdminPanel;


