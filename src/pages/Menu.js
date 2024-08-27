import React from 'react'
import Layout from '../component/Layout/Layout'
import {Box, Card, CardActionArea, CardContent, CardMedia,Typography} from '@mui/material'
import {MenuList} from '../Data/Data'
const Menu = () => {
  return (
    <Layout> 

    <Box sx={{ display: "flex",  flexWrap: "wrap", justifyContent: "center" }}>
    {

        MenuList.map(menu=>(

          <Card sx={{ maxWidth: "400px", display: "flex", m: 2 }}> 

            <CardActionArea>
              <CardMedia
              sx={{ minHeight: "390px" }}
              component={"img"}
              src={menu.image}
              alt={menu.name}/>

              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
    
    }
    </Box>

    </Layout>
  )
}

export default Menu