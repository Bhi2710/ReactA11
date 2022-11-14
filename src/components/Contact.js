import React, { useContext } from 'react';
import Navbar from './Navbar';
import './Common.css';
import { ThemeContext } from '../contexts';

const Contant = ()  =>{

  const {isLight} = useContext(ThemeContext);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Navbar />
            <h1>You can mail me help@abhi.in</h1>
          </div>  
        </>  
    )
}

export default Contant;