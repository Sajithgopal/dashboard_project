import React from 'react'
import AreaCharts from '../AreaCharts';
import Navbar from '../Components/NavBar';
import { Grid, GridItem} from "@chakra-ui/react";


const AreaChartPage = () => {
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
            <AreaCharts />
          </GridItem> }
        </Grid>
        </div>
  )
}

export default AreaChartPage