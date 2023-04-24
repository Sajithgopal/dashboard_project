import React from 'react'
import Navbar from '../Components/NavBar';
import { Grid, GridItem} from "@chakra-ui/react";
import ReactTable from './ReactTable';

const AboutPage = () => {
  return (
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
      paddingEnd={4} >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="chart">
        <ReactTable />
      </GridItem>
      

      
      </Grid>
      );
    }

  
export default AboutPage;