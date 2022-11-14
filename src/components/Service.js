import React, { useContext } from 'react';
import Navbar from './Navbar';
import './Common.css';
import { ThemeContext } from '../contexts';

const Service = () =>{

  const {isLight} = useContext(ThemeContext);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Navbar />
            <h1>Our service are not avilable</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
          </div>    
        </>
    )
}

export default Service;