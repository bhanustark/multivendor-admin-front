import React, { useEffect, useState }  from 'react';
import Grid from '@mui/material/Grid';
import VendorProfileView from '../VendorsProfileView/VendorProfileView';

const VendorProfile = () => {
     const [vendors,setVendors] = useState([])
     useEffect(()=>{
          fetch('https://multivendorapi.herokuapp.com/api/vendor/allvendors')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setVendors(data)
          })
     },[])
     return (
          <>
               <Grid container spacing={2}>
                   <VendorProfileView vendors={vendors}></VendorProfileView>
               </Grid>  
          </>
     );
};

export default VendorProfile;