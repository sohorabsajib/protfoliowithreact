
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles 
                params={{
                    particles:{
                      number:{
                        value:30,
                        density:{
                          enable:true,
                          value_area:902
                        }
                      }
                    }
                }} 
                />
    <Navbar></Navbar>
    <Header></Header>
    </>

  );
  
}

export default App;
