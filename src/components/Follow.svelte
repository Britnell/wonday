<script>
import { spring } from 'svelte/motion';

let trail = [];
const Len = 200;

let coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.01,
    damping: 0.1
});

const mouseMove = (ev)=>{
    let pos = {
        x: ev.pageX,
        y: ev.pageY
    }
    // add to trail
    trail = [pos, ...trail ];

    if(trail.length>Len)
    trail = trail.slice(0,Len);

    // update
}

$: {
    let p = trail[20]
    if(p) coords.set(p)
    // console.log(p)
}

</script>

<div class="container" on:mousemove={mouseMove}>
    <h1>Web Developer</h1>
    <div class="box b1" style={`left: ${$coords.x}px; top: ${$coords.y}px`}></div>
    <h1>Frontend</h1>
    <div class="box b2"></div>
    <h1>Creative tTechnologist</h1>
    <div class="box b3"></div>
</div>


<style>

.container {
    min-height: 100vh;
    border: 1px solid #999;
}

.box {
    background: red;
    width: 40px;
    height: 40px;
    position: absolute;
    transform: translate(-50%,-50%);
}

</style>