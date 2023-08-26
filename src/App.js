import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';

import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <Box width="100%" sx={{ width: { xl: '100%' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
