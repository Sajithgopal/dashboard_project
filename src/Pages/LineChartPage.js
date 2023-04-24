import React from 'react'
import LineCharts from '../LineCharts';
import Navbar from '../Components/NavBar';
import { Grid, GridItem} from "@chakra-ui/react";

const LineChartPage = () => {
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
          <Grid
          templateAreas={{
            base: '"nav" "chart" ',
            lg: '" nav " "chart"  ',
          }}
         
          templateRows={{
            base: "40px 1fr ",
            lg: "auto 1fr",
          }}
          gap="4"
          paddingEnd={4}
        >
          <GridItem   area="nav" >
            <Navbar />
          </GridItem>
          
          { <GridItem
            
        
            area="chart"
            borderRadius={4}
           
          >
            <LineCharts/>
          </GridItem> }
        </Grid>
        </div>
  )
}

export default LineChartPage