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

<div class="container">
    <h1>Web Developer</h1>
    <Logo logo="Goo" mouse={mouse} target={trail[10]} />
    <h1>Frontend</h1>
    <Logo logo="Baa" mouse={mouse} target={trail[30]} />
    <h1>Creative tTechnologist</h1>
    
</div>
<svelte:body on:mousemove|passive={mouseMove} ></svelte:body>


<style>

.container {
    min-height: 100vh;
    border: 1px solid #999;
}

.logo {
    background: red;
    width: 40px;
    height: 40px;
    position: absolute;
    transform: translate(-50%,-50%);
}

</style>