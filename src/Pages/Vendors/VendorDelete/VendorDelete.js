import React from 'react';
import  Button  from '@mui/material/Button';

const VendorDelete = ({vendor}) => {
     let id = vendor._id
     const token = localStorage.getItem('token')
     const handleDelete = (e) =>{
          console.log(id)
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allvendor/${id}`, {
               method: 'PATCH',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
               .then(res => res.json())
               .then(info => {
                    console.log(info)
            });
          e.preventDefault()
     }
     return (
          <>
               <Button size='small' variant="contained" sx={{ml:2}} color="error" onClick={handleDelete}>
                    Delete
               </Button>   
          </>
     );
};

export default VendorDelete;