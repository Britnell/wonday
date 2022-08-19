<script>
import { onMount } from "svelte";
export let shape = 'a';

let reveal = false;
let ref;

const getBottomDist = (el)=>{
  let rect = el.getBoundingClientRect();
  return window.innerHeight - (rect.y + rect.height);
}

onMount(()=>{
  const check = ()=>{
    if(!ref) return;
    if(getBottomDist(ref) > 200){
      reveal = true;
      window.removeEventListener('scroll',check);
    }
  }
  window.addEventListener('scroll',check)
  return ()=>window.removeEventListener('scroll',check);
})

const onScroll = ()=>{
}

</script>

<div bind:this={ref} class={`speechbubble shape-${shape} ${reveal?'reveal':'hidden'}`} >
  <div class="bubble">
      {#if shape === "a"} 
        <svg
          width="495"
          height="306"
          viewBox="0 0 495 306"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.05516 78.1927C3.05914 63.0388 15.4296 50.8428 30.7895 50.8469L89.5889 50.862C92.4291 12.456 64.2514 -11.3417 89.9751 12.6286C115.699 36.5988 102.848 26.3408 125.453 50.8711L464.28 50.9598C479.641 50.9629 492.004 63.1659 492 78.3199L491.945 275.654C491.94 290.808 479.571 303.004 464.21 303L30.7194 302.887C15.3584 302.883 2.99597 290.681 3.00001 275.527L3.05516 78.1927V78.1927Z"
            stroke="black"
            stroke-width="5"
            pathLength="1"
          />
        </svg>
      {/if}
  </div>
  <div class="speech">
    <slot></slot>
  </div>
</div>

<style>
  .speechbubble {
    display: inline-block;
    position: relative;

    --t-bubble: 0.3s;
    --t-words: 0.3s;
  }

  .speech {
    display: inline-block;
    padding: 20px;
    transition: opacity var(--t-words) var(--t-bubble) linear;
  }

  .hidden .speech {
    opacity: 0;
  }
  .reveal .speech {
    opacity: 1;
  }

  @keyframes svg_dash {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}

  .bubble svg {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }
  .reveal .bubble svg {
    stroke-dashoffset: 1;
    animation: svg_dash var(--t-bubble) ease-out forwards;
  }
  


  
  .shape-a .speech {
    padding-top: 13%;
  }

  .bubble {
    position: absolute;
    width: 100%;
    z-index: -1;
    /* height: 100%; */
  }
  .bubble svg {
    width: 100%;
    height: 100%;
  }
</style>
