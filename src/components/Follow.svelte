<script>
import Logo from './Logo.svelte'

let trail = [];
const Len = 200;
let mouse = {x: 0, y: 0};


const mouseMove = (ev)=>{
    mouse = { x: ev.clientX, y: ev.clientY };

    let pos = {
        x: ev.pageX,
        y: ev.pageY
    }    
    let mag = Math.sqrt(ev.movementX * ev.movementX + ev.movementY * ev.movementY );
    if(mag < 2 ) return;

    let _trail = [pos, ...trail ];
    if(_trail.length>Len) _trail.pop()
    trail = _trail;
}

</script>

<div class="skills">
    <div class="grid">
        
        <div class="webdev">
            <h3 class="web">Web</h3>
            <h3 class="dev">developer</h3>
        </div>
        <div class="html">
            <Logo logo="HTML" mouse={mouse} target={trail[10]} />
        </div>
        <div class="css">
            <Logo logo="CSS" mouse={mouse} target={trail[30]} />
        </div>
        <div class="frontend">
            <h3 class="front">front</h3>
            <div class="end">
                <h3>end</h3>
                <Logo logo="React" mouse={mouse} target={trail[50]} />
            </div>
        </div>
        <div class="js">
            <Logo logo="js" mouse={mouse} target={trail[70]} />
        </div>
    </div>
</div>
<svelte:body on:mousemove|passive={mouseMove} ></svelte:body>


<style>

.skills {
    min-height: 100vh;
    border: 1px solid #999;
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
    grid-auto-rows: auto;
    /* 
    grid-template-rows: repeat(40, 10vw); 
    */
}

.grid > div {
    padding: 10px;
}

.webdev {
    grid-column: 1 / 8;
    grid-row: 1 / 5;
}
    .web {
        font-size: 22vw;
    }
    .dev {
        font-size: 10vw;
    }

.html {
    grid-column: 10;
    grid-row: 1;
}
.css {
    grid-column: 12 ;
    grid-row: 1;
}

.frontend {
    grid-column: 8 / 13;
    grid-row: 2 / 7;
}
    .front {
        font-size: 14vw;
        text-align: right;
    }
    .end {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .end h3 {
        font-size: 20vw;
        text-align: right;
    }

.js {
    grid-column: 0;
    grid-row: 7;
}

</style>