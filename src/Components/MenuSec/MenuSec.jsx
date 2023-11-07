import  './MenuSec.css'
import { Box, Container, Stack, } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';


const MenuSec = ({onClick}) => {
    return (
        <div>
            <Container>
                <Stack sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    textAlign: "center"
                }}>

                    <Box sx={{
                        borderBottom: "2px solid gray",
                        width: "130px",
                        textAlign: "center",
                        height: "20px"
                    }}>
                        <Box>Filters</Box>
                    </Box>

                    <Box sx={{
                        width: "90px",
                        height: "30px",
                    }}>
                        <Box><button style={{
                            backgroundColor: "aqua",
                            border: "none",
                            height: "20px",
                            borderRadius: "02px",
                        }}>
                            10,000+add</button></Box>
                    </Box>

                    <Box sx={{
                        width: "260px",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                    }}>
                        <Box sx={{ fontWeight: "bold", fontSize: "10px", paddingTop: "7px" }}>view</Box>
                        <Box><MenuIcon onClick={onClick} /></Box>
                        <Box><WidgetsIcon sx={{color:"blue"}}/></Box>
                        <Box sx={{
                            width: "160px",
                            borderLeft: "1px solid black",
                            marginBottom: "3px",
                            fontSize: "10px",
                            paddingTop: "6px",
                            paddingLeft: "3px",
                        }}><b>SORT BY :
                                <select style={{ border: "none", outline: "none", fontSize: "10px" }}>
                                    <option value="pak">Newly Product listed</option>
                                    <option value="mcc">Oldest Product</option>
                                    <option value="cc">Expensive Product</option>
                                </select>
                            </b></Box>
                    </Box>

                </Stack>
            </Container>
        </div>
    )
}
export default MenuSec;