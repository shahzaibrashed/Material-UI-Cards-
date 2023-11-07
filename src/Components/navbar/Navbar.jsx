import './Navbar.css'
import { Box,IconButton,Stack, } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  


  return (
<Stack 
    sx={{
      flexDirection: "row",
      justifyContent: "space-around",
      bgcolor: 'cadetblue',
      color: " white",
      flexWrap:"wrap",
      position:"fixed",
      width:"100%",
    }}
  >
    <Box sx={{
        height:"40px" ,
        margin:"2px",
         width:"100px",}}>
      <img src='https://qadam-shoes-app.web.app/qadam.logo.png' alt='' width='100%' height= "100%" />
    </Box>

    <Box sx={{
        height:"30px" ,
        textAlign:'center',
        marginTop:"3px",
         width:"33px",
         color:'cadetblue',
         borderRadius:"50px",
         paddingTop:"2px",
         backgroundColor:'beige',
         border:"3px solid white",
         cursor:"pointer"
         }}>
        <HomeIcon className='icons'/>
    </Box>

    <Box  sx={{
        height:"30px" ,
        textAlign:'center',
        marginTop:"3px",
         width:"33px",
         color:'cadetblue',
         borderRadius:"50px",
         paddingTop:"3px",
         backgroundColor:"white",
         border:"3px solid beige",
         cursor:"pointer"
         }}>
      <ContactsIcon className='icons' />
    </Box>

    <Box sx={{
        height:"30px" ,
        textAlign:'center',
        marginTop:"3px",
         width:"33px",
         color:'cadetblue',
         borderRadius:"50px",
         paddingTop:"3px",
         backgroundColor:"white",
         border:"3px solid beige",
         cursor:"pointer"
         }}>
      <AccountCircleIcon className='icons'/>
    </Box>

    <Box sx={{
       height:"30px" ,
       textAlign:'center',
       marginTop:"3px",
        width:"33px",
        color:'cadetblue',
        borderRadius:"50px",
        paddingTop:"3px",
        backgroundColor:"white",
        border:"3px solid beige",
        cursor:"pointer"
         }}>
    <ShoppingCartIcon className='icons'/>
    </Box>
  </Stack>

  )
}
export default Navbar;