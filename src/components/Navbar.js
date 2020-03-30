import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {

    scroll=(input)=>{
        document.querySelector(input).scrollIntoView({ 
            behavior: 'smooth' 
          });
        
    }

    render() {



        return (
            <div className='navBackground'>
                <nav>
                    <p className='navElement navLeft'>Anton Webb.</p>
                    <a className='navElement navRight' href='#contact' onClick={()=> this.scroll('.aboutContainer')}>Contact</a>
                    <a className='navElement navRight' href='#projects' onClick={()=> this.scroll('.aboutContainer')}>Projects</a>
                    <a className='navElement navRight' href="#about" onClick={()=> this.scroll('.aboutContainer')}>About</a>

                </nav>
                
            </div>
        )
    }
}

export default Navbar
