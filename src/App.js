import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UseState from './components/UseState'
import Sidebar from './components/app_parts/Sidebar'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UseEffect from './components/UseEffect'

function App() {
  return (     
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="usestate" element={<UseState />} />
              <Route path="useeffect" element={<UseEffect />} />
            </Routes>
          </Grid>
        </Grid>
      </Container> 
  )
}


export default App
