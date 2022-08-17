<script>
import Logo from './Logo.svelte'

let trail = [];
const Len = 200;
let mouse = {x: 0, y: 0};
let lastSCroll;


const addToTrail = (pos)=>{
    let _trail = [pos, ...trail ];
    if(_trail.length>Len) _trail.pop()
    trail = _trail;
}

const mouseMove = (ev)=>{
    mouse = { x: ev.clientX, y: ev.clientY };

    let pos = {
        x: ev.pageX,
        y: ev.pageY
    }
    
    let mag = Math.sqrt(ev.movementX * ev.movementX + ev.movementY * ev.movementY );
    if(mag < 2 ) return;

    addToTrail(pos)
}

const onScroll = ()=>{
    if(!lastSCroll) {
        lastSCroll = window.scrollY;
        return;
    }

    let yd = window.scrollY - lastSCroll;
    mouse.x += yd;
    if(Math.abs(yd) < 2) return;
    
    let pos = {
        x: trail[0].x,
        y: trail[0].y + yd
    }
    addToTrail(pos);    
    lastSCroll = window.scrollY;
}

</script>

<div class="skills">
    <div class="grid">
        
        <div class="webdev">
            <h3 class="web">Web</h3>
            <h3 class="dev">developer</h3>
        </div>
        <div class="htmlcss">
            <div class="html">
                <Logo logo="HTML" img="/logos/html.svg" mouse={mouse} target={trail[10]} />
            </div>
            <div class="css">
                <Logo logo="CSS" img="/logos/css.svg" mouse={mouse} target={trail[30]} />
            </div>
        </div>
        <div class="frontend">
            <h3 class="front">front</h3>
            <div class="end">
                <h3>end</h3>
                <Logo logo="React" img="/logos/react.svg" mouse={mouse} target={trail[70]} />
            </div>
        </div>
        <div class="andjs">
            <div class="js">
                <Logo logo="js" img="/logos/js.svg" mouse={mouse} target={trail[50]} />
            </div>
            <h3 class="amp">&amp;</h3>
        </div>
        <div class="creativetech">
            <div class="creative">
                <h3>creative</h3>
                <Logo logo="sass" img="logos/sass.svg" mouse={mouse} target={trail[90]} />
            </div>
        </div>
    </div>
</div>
<svelte:body on:mousemove|passive={mouseMove} />
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
    justify-content: space-between;
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
        align-items: initial;
        justify-content: space-between;
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
        align-items: center;
    }
    .creative h3 {
        font-size: 16vw;
    }

</style>