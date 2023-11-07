import './ProductData.css';
import { Box, Stack, } from "@mui/material";
import MenuSec from '../MenuSec/MenuSec.jsx';
import ProductList from '../ProductList/ProductList.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductData = () => {
  const [productData, setProductData] = useState(true)
  const [product, setProduct] = useState([])
  const getData = () => {
    axios.get('https://fakestoreapi.com/products').then((sucess) => setProduct(sucess.data)).catch((error) => console.log(error))
  }

  useEffect(() => {
    getData();
  }, [product])

  console.log(product);
  const convertProduct = () => {
    setProductData(false)
  }

  return (
    <div>

      {
        productData === false ? (<ProductList />)
          :
          <>
            <MenuSec onClick={convertProduct} />
            <Box sx={{ textAlign: "center", color: "cadetblue", fontFamily: "fantasy", fontSize: "30px" }}>PRODUCT CARD</Box>

            <Stack sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: "3vh",
              flexWrap: "wrap",
              textAlign: "center"
            }}>
              {
                product.map((e, i) => <Box sx={{
                  marginTop: "10px",
                  boxShadow: "0 0 15px black",
                  border: "2px solid black",
                  width: "200px",
                  borderRadius: "10px",
                  height: "290px"
                }} key={i}>

                  <Box sx={{
                    height: "140px",
                    width: "190px",
                    margin: "3px",
                    borderRadius: "10px",
                  }}>
                    <img className='img-product' style={{ borderRadius: "10px" }} src={e.image} alt={e.title} width="100%" height="100%" />
                  </Box>




                  <Box sx={{
                    fontSize: "10px",
                    margin: "3px",
                    textAlign: "center",
                    width: "190px",
                  }}>{e.description.slice(0, 130)}
                    All well Prouct!
                  </Box>

                  <Box sx={{
                    fontSize: "19px",
                    margin: "3px",
                    textAlign: "center",
                    color: "brown",
                    width: "190px",
                  }}>
                    <Box><b>Rs : ${e.price}</b></Box>
                  </Box>

                  <Box sx={{


                  }}>
                    <Box><button className='btn'>Buy</button></Box>
                  </Box>

                </Box>)

              }
            </Stack>
          </>
      }


    </div>
  )
}
export default ProductData;