
import './portfolio.css'

import shelf from './img/album-shelf.png'
import food from './img/food-delivery.png'
import pomodoro from './img/pomodoro.png'
import ct_intro from './img/ct.png'
import symmetry from './img/symmetry.png'
import islamic from './img/islamic.png'
import hexagonal from './img/hexagonal.png'
import mona from './img/mona.png'
import morph from './img/morph.png'
import curious from './img/wiki.png'
import three from './img/three-js.png'
import note from './img/sharednote.png'

function Card({title,text,img,link,children}){

    return (
        <article className="card" >
            <a href={link} >
                {img && (<div><img src={img.src} alt={img.alt}  /></div>)}
                {title && <div className="title">{title}</div>}
                {text && <div className="asub">{text}</div>}
                {children}
            </a>
        </article>
    )
}

export default function Portfolio(){
    
    return (
        <div className="pf" >
            <div className="introduction">
                <div className="ptitle" >PORTFOLIO</div>

                <div className="pintro">
                    My work projects have been mostly prototypes, research, 
                    demonstrators, proof-of-concepts etc. 
                    So these are entirely personal projects. 
                    Things that I made for fun, for practice, and 
                    often because I just wanted the result to exist.
                </div>
            </div>


            <div className="pgrid" >

                <Card
                    title="MY DIGITAL CD SHELF"
                    text="built with Spotify API"
                    img={{src:shelf, alt:"My spotify album shelf" }} 
                    link="https://next-album-shelf.vercel.app/"
                />
                <Card
                    title="SHARED-NOTE"
                    text="A simpled web-app for shared notes, list & to-dos"
                    img={{src:note, alt:"A shared note page" }} 
                    link="https://shared-note.vercel.app"
                />
                <Card
                    title="POMODORO TIMER PWA"
                    text="A Pomodoro Timer Progress-Web-App, built with redux and tailwind"
                    img={{src:pomodoro, alt:"A pomodoro timer PWA" }} 
                    link="https://webs.wonday.eu/react/pomodoro/"
                />
                <Card
                    title="A FULL-STACK (DEMO) FOOD DELIVERY"
                    text="Built with Next.js, session login, owners CRUD restaurant & meals, users can place orders, order status processing"
                    img={{src:food, alt:"A Demo delivery website" }} 
                    link="https://a-delivery-website.vercel.app"
                />
                <Card
                    title="MY INTRODUCTION"
                    text="I once created this interactive introduction."
                    img={{src:ct_intro, alt:"My interactive introduction" }} 
                    link="https://wonday.eu/ct.html"
                />
                <Card
                    title="THREE JS"
                    text="I am learing / practicing THREE.js "
                    img={{src:three, alt:"THREE.js projects" }} 
                    link="https://three-trials.vercel.app/"
                />
                
                <Card
                    title="EYE-TRACKING"
                    text="I found a fun little eye-tracking API"
                    img={{src:mona, alt:"interactive eyetracking" }} 
                    link="https://webs.wonday.eu/html/gaze_mona.html"
                />

                <Card
                    title="SVG MORPHING"
                    text="I really like this effect"
                    img={{src:morph, alt:"SVG morph" }} 
                    link="https://workout.wonday.eu/2021/08/31/morphing-svg-paths/"
                />

                <Card
                    title="RANDOM CURIOSITIES"
                    text="Serves a random unusual article"
                    img={{src:curious, alt:"Wikipedia curiousities" }} 
                    link="https://webs.wonday.eu/html/curious.html"
                />

                <article className="card" >
                    <a href="https://webs.wonday.eu">
                        <div style={{fontSize:'1.4rem'}}>
                            2D INTERACTIONS & ANIMATIONS WITH PAPER.JS
                        </div>
                    </a>
                </article>

                <Card
                    link="https://webs.wonday.eu/html/path_gen.html"
                    img={{src: symmetry, alt: "Symmetrical patterns"}}
                />
                <Card
                    link="https://webs.wonday.eu/html/path_gen.html"
                    img={{src: islamic, alt: "Islamic geometric" }}
                />
                <Card
                    link="https://webs.wonday.eu/html/paper_hexagonal.html"
                    img={{src: hexagonal, alt: "Hexagonal automaton" }}
                />

                {/* I created a chat introduction  */}
            </div>

        </div>
    )
}
