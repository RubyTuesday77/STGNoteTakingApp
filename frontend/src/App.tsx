import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    // Set initial state for alert as null
    const [alert, setAlert] = useState(null);

    // Function to show alert which takes 2 args, msg & type
    const showAlert = (message: string, type: any) => {
        setAlert({
          // @ts-ignore
          msg: message,
          type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    };

  return (
        <>
            { /* Use NoteState so any child will use context */ }
            <NoteState>
                <Router>
                    <Header />
                    {/* @ts-ignore */}
                    <Alert alert={ alert } />
                    <div className='container'>
                        <Routes>
                            {/* @ts-ignore */}
                            <Route exact path='/' element={ <Home showAlert={ showAlert } /> } />
                            {/* @ts-ignore */}
                            <Route exact path='/about' element={ <About /> } />
                            {/* @ts-ignore */}
                            <Route exact path='/login' element={ <Login showAlert={ showAlert } /> } />
                            {/* @ts-ignore */}
                            <Route exact path='/signup' element={ <Signup showAlert={ showAlert } /> } />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
};

export default App;