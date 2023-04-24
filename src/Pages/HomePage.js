import { Grid, GridItem} from "@chakra-ui/react";
import Navbar from "../Components/NavBar";
import LineCharts from "../LineCharts";
import AreaChart from "../AreaCharts";
import BarChart from "../BarCharts";
const HomePage = () => {
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
          >
            <LineCharts />
          </GridItem> }
        </Grid>
        
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
          </GridItem>
          { <GridItem
            
        
            area="chart"
            borderRadius={4}
            borderBottomColor="red"
          >
            <AreaChart />
          </GridItem> }
        </Grid>
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
          </GridItem>
          { <GridItem
            area="chart"
          >
            <BarChart />
          </GridItem> }
        </Grid>
        
      </div>
    
  );
};

export default HomePage;

