import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CategoryDetails from '../CategoryDetails/CategoryDetails/CategoryDetails';
import CategoryAdd from '../CategoryAdd/CategoryAdd/CategoryAdd';
import CategoryDelete from '../CategoryDelete/CategoryDelete';
import Typography from '@mui/material/Typography';

function Row(props) {
     const { category,index } = props;
     const [open, setOpen] = React.useState(false);

     return (
     <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
               <IconButton
               aria-label="expand row"
               size="small"
               onClick={() => setOpen(!open)}
               >
               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
          </TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#04AA6D', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {category.name}
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#04AA6D', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                   cat - {index+1}
               </Typography></TableCell>
         
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 2, display:'flex' }}>
                    {/* <CategoryAdd></CategoryAdd> */}
                    <CategoryDelete category={category}></CategoryDelete>
               </Box>
               <CategoryDetails category={category}></CategoryDetails> 
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

const Category = ({categories}) => {
     console.log(categories)
     return (
          <>
              <TableContainer sx={{mt:4}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Category Title
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Category Id
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Total Product
                              </Typography></TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {categories.map((category, index) => (
                              <Row key={category._id} index={index} category={category} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>  
          </>
     );
};

export default Category;