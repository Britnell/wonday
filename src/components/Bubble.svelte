<script>
import { onMount } from "svelte";
export let shape = 'a';
export let thresh = 200;

let reveal = false;
let ref;

const getBottomDist = (el)=>{
  let rect = el.getBoundingClientRect();
  return window.innerHeight - rect.y - rect.height;
}

onMount(()=>{
  const check = ()=>{
    if(!ref) return;
    if(getBottomDist(ref) > thresh){
      reveal = true;
      window.removeEventListener('scroll',check);
    }
  }
  window.addEventListener('scroll',check)
  return ()=>window.removeEventListener('scroll',check);
})


</script>

<div class={`speechbubble shape-${shape} ${reveal?'reveal':'hidden'}`} >
  <div bind:this={ref} class="bubble">
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
      {#if shape === "b"} 
        <svg width="494" height="306" viewBox="0 0 494 306" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" pathLength="1" clip-rule="evenodd" d="M490.945 78.1927C490.941 63.0388 478.596 50.8428 463.267 50.8469L404.588 50.862C401.754 12.456 429.874 -11.3417 404.203 12.6286C378.532 36.5988 391.356 26.3408 368.798 50.8711L30.6629 50.9598C15.3334 50.9629 2.9958 63.1659 3 78.3199L3.05535 275.654C3.05945 290.808 15.404 303.004 30.7334 303L463.337 302.887C478.667 302.883 491.004 290.681 491 275.527L490.945 78.1927V78.1927Z" stroke="black" stroke-width="5"/>
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

    --t-bubble: 0.4s;
    --t-words: 0.4s;
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
  
  .shape-a .speech, .shape-b .speech {
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
