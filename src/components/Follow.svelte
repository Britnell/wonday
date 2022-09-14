<script>
import { writable } from 'svelte/store';
import Logo from './Logo.svelte'

let trail = [];
const Len = 400;
const tail = writable(10);

let lastScroll;

let ref;

let mouse, lastMouse;

const addToTrail = (pos)=>{
    let _pos = { x:pos.x, y:pos.y }
    let _trail = [_pos, ...trail ];
    if(_trail.length>Len) _trail.pop()
    trail = _trail;
}


const getDistance = (p1,p2)=>{
    let vec = {
        x: p1.x - p2.x,
        y: p1.y - p2.y
    }
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y );
}

const mouseMove = (ev)=>{
    if(!lastMouse) {
        lastMouse = {
            x: ev.clientX, 
            y: ev.clientY
        }
        return;
    }

    let pos = {
        page: { x: ev.pageX, y: ev.pageY },
        client: { x: ev.clientX, y: ev.clientY }
    }
    
    let mag = getDistance(lastMouse, pos.client)
    if(mag <= 2) return;

    mouse = pos;
    lastMouse = {
        x: ev.clientX, 
        y: ev.clientY
    }

    if(isOnElement(ref,mouse.client))
        addToTrail(mouse.page);
}

const isOnElement = (el,pos)=>{
    let rec = el.getBoundingClientRect();
    if(pos.y< rec.y) return false;
    if(pos.y > rec.y + rec.height) return false;
    return true;
}
const onScroll = ()=>{
    if(!lastScroll) {
        lastScroll = window.scrollY;
        return;
    }
    if(!mouse) return;

    let yd = window.scrollY - lastScroll;
    if(Math.abs(yd) < 1) return;

    mouse.page.y = Math.floor(mouse.page.y + yd);
    lastScroll = window.scrollY;
        
    if(isOnElement(ref,mouse.client))
        addToTrail(mouse.page);
}

</script>

<div bind:this={ref} class="skills">
    <div class="grid">
        
        <div class="webdev">
            <h3 class="web">Web</h3>
            <h3 class="dev">developer</h3>
        </div>
        <div class="htmlcss">
            <div class="html">
                <Logo mouse={mouse} tail={tail} trail={trail}  alt="HTML" follow='auto' img="logos/html.svg"  />
            </div>
            <div class="css">
                <Logo mouse={mouse} tail={tail} trail={trail} alt="CSS" follow='auto' img="logos/css.svg"  />
            </div>
        </div>
        <div class="frontend">
            <h3 class="front">front</h3>
            <div class="end">
                <h3>end</h3>
                <Logo mouse={mouse} tail={tail} trail={trail} alt="React" img="logos/react.svg"  />
            </div>
        </div>
        <div class="andjs">
            <div class="js">
                <Logo mouse={mouse} tail={tail} trail={trail} alt="js" follow='auto' img="logos/js.svg"  />
            </div>
            <h3 class="amp">&amp;</h3>
        </div>
        <div class="creativetech">
            <div class="creative">
                <h3>creative</h3>
                <div class="logos">
                    <Logo mouse={mouse} tail={tail} trail={trail} alt="sass" img="logos/sass.svg"  />
                    <Logo mouse={mouse} tail={tail} trail={trail} alt="tailwind" img="logos/tailwind.svg"  />
                    <Logo mouse={mouse} tail={tail} trail={trail} alt="figma" img="logos/figma.svg"  />
                </div>
            </div>
            <div class="technologist">
                <Logo mouse={mouse} tail={tail} trail={trail} alt="typescript" img="logos/ts.svg"  />
                <Logo mouse={mouse} tail={tail} trail={trail} alt="npm" img="logos/npm.svg"  />
                <h3>technologist</h3>
                </div>
                <div class="fullstackrow">
                    <div class="fullstack">
                        <h3 class="full">full</h3>
                        <h3 class="stack">stack ?</h3>
                    </div>
                    <div class="logos">
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="next" img="logos/next.png"  />
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="remix" img="logos/remix.svg"  />
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="prisma" img="logos/prisma.svg"  />
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="supabase" img="logos/supabase.svg"  />
                    </div>
                </div>
                <div class="more">
                    <div class="logos_before">
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="storyblok" img="logos/storyblok.svg"  />
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="astro" img="logos/astro.svg"  />
                    </div>
                    <div class="headless">
                        <h3>Headless CMS</h3>
                        <h3>SSG & Cdn</h3>
                    </div>
                    <div class="logos_after">
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="vercel" img="logos/vercel.svg"  />
                        <Logo mouse={mouse} tail={tail} trail={trail} alt="netlify" img="logos/netlify.svg"  />
                    </div>
                    </div>
                    <div class="cool">
                        <div class="logos">
                            <div class="svelte">
                                <Logo mouse={mouse} tail={tail} trail={trail} alt="svelte" img="logos/svelte.svg"  />
                            </div>
                            <div class="solid">
                                <Logo mouse={mouse} tail={tail} trail={trail} alt="solid" img="logos/solid.svg"  />
                            </div>
                        </div>
                        <h3>Then there’s the new kids on the block 👀</h3>
                    </div>
            <div class="endspacer"></div>
        </div>
    </div>
</div>
<svelte:body on:mousemove={mouseMove}  />
<svelte:window on:scroll={onScroll} />

<style>

.skills {
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    font-size: clamp(50px, 20vw, 200px);
}

.skills h3 {
    font-family: Oswald;
    line-height: 1.2;
    margin: 0;
    text-transform: uppercase;
}

.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    overflow: hidden;

    padding: 20px;
    gap: .1em;
}


.webdev {
    grid-column: 1 / 7;
    grid-row: 1 / 5;
}
    .web {
        font-size: 1.2em;
    }
    .dev {
        font-size: .5em;
    }

.htmlcss {
    grid-column: 7 / 13;
    grid-row: 1;

    display: flex;
    gap: .5em;
}

.frontend {
    grid-column: 7 / 13;
    grid-row: 2 / 7;
}
    .front {
        font-size: .8em;
    }
    .end {
        display: flex;
        align-items: center;
    }
    .end h3 {
        font-size: 1em;
    }

.andjs {
    grid-column: 1 / 5;
    grid-row: 5 / 8;

    display: flex;
    justify-content: space-between;
}
    .amp {
        font-size: 1em;
    }

.creativetech {
    grid-column: 1 / 13;
    grid-row: span 2;

}


    .creative {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .creative h3 {
        font-size: 1.1em;
    }
    .creative .logos {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .technologist {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .technologist h3 {
        font-size: .6em;
    }

    .fullstackrow {
        margin-top: .4em;
        display: flex;
    }
        .fullstack {
            display: flex;
            flex-direction: column;
        }
        .fullstack h3 {
            font-size: .9em;
        }

        .fullstackrow .logos {
            flex: 1;
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr;
            place-items: center;
        }
    
    .more {
        margin-top: .4em;
        display: flex;
        align-items: center;
    }

        .headless {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .headless h3 {
            font-size: .4em;
            text-transform: capitalize;
            text-align: center;
        }
        .more .logos_before {
            display: flex;
            row-gap: 20px;
        }
        .more .logos_after {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }

        
        .cool .logosy {
            
            display: flex;
            justify-content: center;
            column-gap: 20px;
        }
    
    .cool {
        margin-top: .4em;
        display: flex;
        flex-flow: column-reverse;
        align-items: center;
        row-gap: 20px;
    }

        .cool h3 {
            flex: 2;
            font-size: .3em;
            text-transform: capitalize;
            max-width: 80%;
            margin: 0 auto;
            text-align: center;
        }
        .cool .logos {
            flex: 1;

            display: grid;
            grid-template: repeat(2,100px) / repeat(2,100px);
        }
        .solid {
            grid-row: 2/3;
            grid-column: 2/3;
        }
        
    .endspacer {
        min-height: 40vh;
    }


    
@media (max-width: 700px){
    .grid {
        gap: 4px
    }

    .webdev {
        grid-column: 1 / 10;
        grid-row: 1 / 6;
    }
    .web {
        font-size: 1.7em;
    }
    .dev {
        font-size: .7em;
    }

    .htmlcss {
        grid-column: 10 / 13;
        grid-row: 1 / 6;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: space-around;
        gap: 0;
    }

    .frontend {
        grid-column: 4 / 13;
        grid-row: 6 / 11;
    }
        .front {
            font-size: 1.2em;
        }
        .end {
            font-size: 1.2em;
        }
    
    .andjs {
        grid-column: 1 / 4;
        grid-row: 6 / 11;
        flex-direction: column;
        justify-content: space-evenly;
        row-gap: 0;
    }   
        .amp {
            font-size: 1.3em;
        }
        .creative {
            align-items: flex-end;
        }
        .creative h3 {
            font-size: .9em;
        }

    .technologist {
        flex-flow: wrap-reverse;
        justify-content: center;
        column-gap: 20px;
    }

    .fullstackrow .logos {
        grid-template: 1fr 1fr 1fr / 1fr;
        gap: 10px;        
    }
        .fullstack .full {
            font-size: 1.3em;
        }
        .fullstack .stack {
            font-size: 0.95em;
        }
    
    .more {
        flex-direction: column;
    }
        .more .logos {
            display: flex;
            column-gap: 20px;
        }

}

</style>