import './tbct.css'

import tb from './img/tb.svg'
import fe from './img/fe.svg'
import ct from './img/ct.svg'


export default function TBCT(){

    return (
        <header>
            <div className="stickycontainer">

                <div className="container">
                    <div className="bar" style={{flex:'3 0'}} ></div>

                    <div className="tb">
                        <img src={tb} alt="Thomas Britnell"  />
                        <div style={{flex: '1 0'}} className="filler" ></div>
                    </div>

                    <div className="bar" style={{flex:'1 0'}} ></div>
                        
                    <div className="fe">
                        <div className="filler" style={{ flex: '3 0' }} ></div>
                        <img src={fe} alt="Front End developer"  />
                        <div className="filler" style={{flex: '1 0'}} ></div>
                    </div>

                    <div className="bar" style={{flex:'1 0'}} ></div>
                    
                    <div className="ct">
                        <div className="filler" style={{ flex: '1 0' }} ></div>
                        <img src={ct} alt="Creative Technologist"  />
                        <div className="filler" style={{ flex: '3 0' }} ></div>
                    </div>

                    <div className="bar" style={{flex:'3 0'}} ></div>
                        
                </div>

            </div>
            
            <div id="marker"></div>
            
            <div className="background">
                <div className="gradient"></div>
            </div>
        </header>
    )
}