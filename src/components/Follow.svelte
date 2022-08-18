<script>
import Logo from './Logo.svelte'

let trail = [];
const Len = 400;
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
                <Logo logo="HTML" img="/logos/html.svg" target={trail[10]} />
            </div>
            <div class="css">
                <Logo logo="CSS" img="/logos/css.svg" target={trail[30]} />
            </div>
        </div>
        <div class="frontend">
            <h3 class="front">front</h3>
            <div class="end">
                <h3>end</h3>
                <Logo logo="React" img="/logos/react.svg" target={trail[70]} />
            </div>
        </div>
        <div class="andjs">
            <div class="js">
                <Logo logo="js" img="/logos/js.svg" target={trail[50]} />
            </div>
            <h3 class="amp">&amp;</h3>
        </div>
        <div class="creativetech">
            <div class="creative">
                <h3>creative</h3>
                <div class="logos">
                    <Logo logo="sass" img="logos/sass.svg" target={trail[90]} />
                    <Logo logo="tailwind" img="logos/tailwind.svg" target={trail[110]} />
                </div>
            </div>
            <div class="technologist">
                <Logo logo="typescript" img="logos/ts.svg" target={trail[130]} />
                <Logo logo="npm" img="logos/npm.svg" target={trail[150]} />
                <h3>technologist</h3>
                </div>
                <div class="fullstackrow">
                    <div class="fullstack">
                        <h3 class="full">full</h3>
                        <h3 class="stack">stack ?</h3>
                    </div>
                    <div class="logos">
                        <Logo logo="next" img="logos/next.png" target={trail[170]} />
                        <Logo logo="remix" img="logos/remix.svg" target={trail[190]} />
                        <Logo logo="prisma" img="logos/prisma.svg" target={trail[210]} />
                        <Logo logo="supabase" img="logos/supabase.svg" target={trail[230]} />
                    </div>
                </div>
                <div class="more">
                    <Logo logo="storyblok" img="logos/storyblok.svg" target={trail[250]} />
                    <div class="headless">
                        <h3>Headless CMS</h3>
                        <h3>& Cdn</h3>
                    </div>
                    <Logo logo="vercel" img="logos/vercel.svg" target={trail[270]} />
                    <Logo logo="netlify" img="logos/netlify.svg" target={trail[290]} />
                    </div>
                    <div class="cool">
                    <div class="logos">
                        <div class="astro">
                            <Logo logo="astro" img="logos/astro.svg" target={trail[310]} />
                        </div>
                        <div class="svelte">
                            <Logo logo="svelte" img="logos/svelte.svg" target={trail[330]} />
                        </div>
                        <div class="solid">
                            <Logo logo="solid" img="logos/solid.svg" target={trail[350]} />
                        </div>
                    </div>
                    <h3>Then there’s the new kids on the block 👀</h3>
                </div>
            </div>
    </div>
</div>
<svelte:body on:mousemove={mouseMove}  />
<svelte:window on:scroll={onScroll} />

<style>

.skills {
    min-height: 100vh;
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
}

.grid > div {
    padding: 10px;
}

.webdev {
    grid-column: 1 / 7;
    grid-row: 1 / 5;
}
    .web {
        font-size: 22vw;
    }
    .dev {
        font-size: 10vw;
    }

.htmlcss {
    grid-column: 7 / 13;
    grid-row: 1;

    display: flex;
    gap: 100px;
}

.frontend {
    grid-column: 7 / 13;
    grid-row: 2 / 7;
}
    .front {
        font-size: calc(16vw);
    }
    .end {
        display: flex;
        align-items: center;
    }
    .end h3 {
        font-size: 20vw;
    }

.andjs {
    grid-column: 1 / 5;
    grid-row: 5 / 8;

    display: flex;
    justify-content: space-between;
}
    .amp {
        font-size: 20vw;
    }

.creativetech {
    grid-column: 1 / -1;
    grid-row: span 2;

}

    .creative {
        display: flex;
        justify-content: space-between;
    }
    .creative h3 {
        font-size: 22vw;
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
        font-size: 12vw;
    }

    .fullstackrow {
        margin-top: 100px;
        display: flex;
    }
        .fullstack {
            display: flex;
            flex-direction: column;
        }
        .fullstack h3 {
            font-size: 18vw;
        }

        .fullstackrow .logos {
            flex: 1;
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr;
            place-items: center;
        }
    
    .more {
        margin-top: 100px;
        display: flex;
        align-items: center;
    }

        .headless {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .headless h3 {
            font-size: 8vw;
            text-transform: capitalize;
            text-align: center;
        }
    
    .cool {
        margin-top: 100px;
        display: flex;
    }

        .cool h3 {
            flex: 2;
            font-size: 6vw;
        }
        .logos {
            flex: 1;

            display: grid;
            grid-template: repeat(3,100px) / repeat(3,100px);
        }
        .svelte {
            grid-row: 2/3;
            grid-column: 2/3;
        }
        .solid {
            grid-row: 3/4;
            grid-column: 3/4;
        }
</style>