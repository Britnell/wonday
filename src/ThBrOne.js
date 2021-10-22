import React from 'react';

// V1
import './ThBrOne.css';
import CT from './ct.svg'
import ThBr from './ThBr.svg'

export default function ThBrOne(){

  return (
    <header>
        
        <div className="stickycontainer">

            <div className="flexrow">
              <div className="fleximg tb">
                <img className="headerimg" src={ThBr} alt={"Thomas Britnell"} />
              </div>
              <div className="filler"></div>
            </div>

            <div className="flexrow">
              <div className="filler"></div>
              <div className="fleximg ct">
                <img className="headerimg" src={CT} alt={"Creative Technologist"} />
              </div>
            </div>

            <div className="fillrow"></div>

        </div>
        <div className="background">
            <div className="gradient"></div>
        </div>
        
      </header>
  )
}