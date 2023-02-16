import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout/Layout';
import Home from './routes/Home';
import RegisterCrop from './routes/RegisterCrop';
import AllCrops from './routes/AllCrops';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/register-crop' element={<RegisterCrop />} />
            <Route path='/all-crops' element={<AllCrops />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
