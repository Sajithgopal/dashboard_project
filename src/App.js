import './App.css';
import LineChartPage from './Pages/LineChartPage';
import AreaChartPage from './Pages/AreaChartPage';
import BarChartPage from './Pages/BarChartPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App () {
  return (
    <>
    
    <BrowserRouter>
    
    {<Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/linechart" element={<LineChartPage/>}/>
      <Route path ="/barchart" element={<BarChartPage/>}/>
      <Route path ="/areachart" element={<AreaChartPage/>}/>
      <Route path ="/about" element={<AboutPage/>}/>
    </Routes>}
    
    </BrowserRouter>
    
    </>
  );
}
export default App
