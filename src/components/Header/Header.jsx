import React from 'react';
import './Header.css'
import { Navbar } from '../Navbar/Navbar';



export const Header = () => {
  return (
    <Header>
        <div className="wrapper">
            <Navbar />
\            <div className='cta'>
                <p className="course-name">Sound Design MasterClass</p>
                <h1>Learn the Art of Sound Design</h1>
                <a href="#" className='demo-btn'>Demo Lesson</a>
            </div>

        </div>

    </Header>
  )
}
