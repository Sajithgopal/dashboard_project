import React from 'react'
import Barcharts from '../BarCharts';
import Navbar from '../Components/NavBar';
import { Grid, GridItem} from "@chakra-ui/react";
const BarChartPage = () => {
  return (
    <div>
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
        
          { < GridItem
            area="chart"
          >
            <Barcharts />
          </GridItem> }
        </Grid>
        
      </div>
  )
}

export default BarChartPage