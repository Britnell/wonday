<script>
import { onMount } from 'svelte/internal';
import { spring } from 'svelte/motion';

export let mouse = {x:0,y:0};
export let target = {x:0,y:0};
export let logo = 'logo';
export let img;

let ref, coords;
let following = false;

const checkForFollow = ()=> {
    if(!ref) return;
    if(!following){
        let rect = ref.getBoundingClientRect();
        if(mouse.y > rect.y) {
            following = true;
            let rect = ref.getBoundingClientRect();
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
    }
}

$: checkForFollow(mouse,ref);

const update = ()=>{
    if(!following) return;    
    if(target) coords.set(target);
}

$: update(target);

</script>


<div bind:this={ref}  class="logo_container">   
    <div 
        class={`logo ${following?'follow':'fixed'}`}
        style={`left: ${following?`${$coords.x}px` : 'unset' }; `+
               `top: ${following?`${$coords.y}px` : 'unset' }; `}
    >
     <img src={img} alt={logo} />
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