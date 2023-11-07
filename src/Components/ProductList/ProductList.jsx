import './ProductList.css';
import { Box, Stack, } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuSection from '../MenuSection/MenuSection.jsx'
import ProductData from '../ProductData/ProductData.jsx';
const ProductList = () => {

    const [product, setProduct] = useState([])
    const [productlist, setProductlist] = useState(true)

    const getData = () => {
        axios.get('https://fakestoreapi.com/products').then((sucess) => setProduct(sucess.data)).catch((error) => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [product])

    console.log(product);
const changePage = ()=>{
    setProductlist(false)
}

    return (
        <div>
{
    productlist === false ? <ProductData/> : 
<>
            <MenuSection onClick={changePage}/>
            <Box sx={{ textAlign: "center", color: "cadetblue",fontFamily:"fantasy",fontSize:"30px" }}>PRODUCT LIST</Box>

            {
                product.map((e, i) => <Stack sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    margin:"auto",
                    marginTop: "05px",
                    padding: "5px",
                }} key={i}>

                    <Box sx={{
                        width: "150px",
                        height:"160px",
                        border:"1px solid black",
                        borderRight:"none",
                        borderTopLeftRadius:'10px',
                        borderBottomLeftRadius:'10px',
                    }}>
                        <img style={{borderRadius:"10px"}} src={e.image} alt={e.title} width="100%" height="100%" />
                    </Box>

                    <Box sx={{

                        border: "1px solid black",
                        width: "350px",
                        borderLeft:"none",
                        borderTopRightRadius:'10px',
                        borderBottomRightRadius:'10px',
                    }}>
                        <Box sx={{
                            paddingLeft: "5px",
                            marginTop: "05px",
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: 'space-between',
                           }}>

                            <Box><b>Rs : {e.price}</b></Box>
                            <Box> <Checkbox sx={{height:"20px",color:"cadetblue"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></Box>
                        </Box>

                        <Box sx={{
                            marginTop:"05px",
                            paddingLeft:"5px",
                            fontSize:"10px"
                            }}>{e.description.slice(0,100)} All well Prouct!
                            </Box>

                        <Box sx={{
                            height:"20px",
                            color:"cadetblue",
                            fontSize:"10px",
                            paddingLeft:"5px",
                            marginTop:"15px"
                        }}>
                            All Product Best Quality Qadam !
                        </Box>

                        <Box sx={{
                            marginLeft:"5px",
                            height:"35px",
                           paddingTop:"5px",
                           paddingLeft:"3px",
                           marginTop:"5px"
                        }}>
                            <button className='btn-buy'>BUY</button>
                            <button style={{marginLeft:"5px"}} className='btn-chat'>CHAT</button>
                        </Box>


                    </Box>

                </Stack>)

            }
            </>
}

        </div>
    )
}
export default ProductList;