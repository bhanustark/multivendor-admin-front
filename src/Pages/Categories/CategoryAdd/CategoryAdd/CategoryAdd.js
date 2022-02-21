import React from 'react';
import  Button  from '@mui/material/Button';
import CategoryModal from '../CategoryModal/CategoryModal';

const CategoryAdd = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <div>
               <Button  size='small' variant="contained" onClick={handleOpen}>
                    ADD NEW Category
               </Button> 
               <CategoryModal open={open} handleClose={handleClose}></CategoryModal>
          </div>
     );
};

export default CategoryAdd;