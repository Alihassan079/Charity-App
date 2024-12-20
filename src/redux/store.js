import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import DonorReducer from "./features/donorSlice";
import DonationReducer from "./features/donationSlice";
import BeneficiaryReducer from "./features/beneSlice";
import VolunteerReducer from "./features/volSlice";
import userRequests from "./features/userRequests";
import payment from "./features/payment";



export default configureStore({

    reducer:{
        auth: AuthReducer,
        donor: DonorReducer,
        donation: DonationReducer,
        beneficiary: BeneficiaryReducer,
        volunteer: VolunteerReducer,
        userRequests: userRequests,
        payments: payment
    },
});
