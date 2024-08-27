import React from 'react'
import Layout from '../component/Layout/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <div><Layout> 
    <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
        We’d Love to Hear From You!
        </p>
        <br></br>
        <p>
        
        At RUSHI  RUSH, we value your feedback, questions, and inquiries. Whether you’re looking to make a reservation, inquire about catering services, or have any other questions, our team is here to assist you.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer >
          <Table aria-label="contact table">
            
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>             
            </TableHead>

            <TableBody>

              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> rushi6927@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />8928329898
                </TableCell>
              </TableRow>

            </TableBody>

          </Table>

        </TableContainer>
      </Box>
      
      </Layout></div>
  )
}

export default Contact