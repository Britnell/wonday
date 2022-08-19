<script>
import { spring } from 'svelte/motion';

export let img;
export let alt = 'logo';
export let follow = 'mouse';

export let mouse;
export let trail;
export let tail;

let ref, coords;
let following = false;
let tailPos;

const startFollowing = (rect)=>{
    following = true;
    tailPos = $tail;
    tail.update(t=>t+20);

    let initial = {
        x: rect.x + rect.width/2 + window.scrollX,
        y: rect.y + rect.height/2 + window.scrollY
    }
    coords = spring({ 
        x: initial.x, 
        y: initial.y
    }, {
        stiffness: 0.01,
        damping: 0.1
    });
}

const checkForFollow = ()=> {
    if(!ref) return;
    if(!mouse) return;

    let rect = ref.getBoundingClientRect();

    if(follow==='mouse'){
        const vec = {
            x: rect.x + rect.width/2 - mouse.client.x,
            y: rect.y + rect.width/2 - mouse.client.y
        }
        const dist = Math.abs(vec.x * vec.x + vec.y * vec.y );
        if(dist < 5000) startFollowing(rect);
    }

    if(follow==='auto'){
        let h = rect.y + rect.height/2
        if(mouse.client.y > h) startFollowing(rect);
    }

}



const update = ()=>{
    if(!following) {
        checkForFollow();
        return;
    }
    let pos = trail[tailPos]
    if(pos) coords.set(pos);
}

$: update(mouse);

</script>


<div bind:this={ref}  class="logo_container">   
    <div 
        class={`logo ${following?'follow':'fixed'}`}
        style={`left: ${following?`${$coords.x}px` : 'unset' }; `+
               `top: ${following?`${$coords.y}px` : 'unset' }; `}
    >
     <img src={img} alt={alt} />
    </div>
</div>


<style>

    .logo_container, .logo {
        width:  100px;
        height: 100px;    
    }
    .logo {
        z-index: -1;
        position: relative;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .fixed {
        position: relative;
    }

    .follow {
        position: absolute;
        transform: translate(-50%,-50%);
    }


</style>