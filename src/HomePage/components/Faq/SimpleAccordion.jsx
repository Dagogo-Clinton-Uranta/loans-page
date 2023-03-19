import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {GoTriangleDown} from 'react-icons/go'




export default function SimpleAccordion({header,body}) {

    const [on,setOn] = React.useState(false)

    const highlight = {
     backgroundColor:"blue",
     width:"1px",
     height:"23px",
     position:"absolute",
     top:"27%",
     left:"0%",
     zIndex:"20",
     display:`${on?"block":"none"}` 
     
    }


  return (
    <div style={{position:"relative"}}>
        <div className={on && "selected__accent"} ></div>
      <Accordion sx={{marginTop:{xs:"-2.5rem", md:"-1.5rem",lg:"0rem"},padding:"20px",borderRadius:"20px"}}>
        <AccordionSummary onClick = {()=>{setOn(!on)}}
          expandIcon={<GoTriangleDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"1.2rem",fontWeight:"500",fontFamily:"Poppins",color:"darkBlue"}}>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{fontFamily:"Poppins"}}>
           {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
  );
}