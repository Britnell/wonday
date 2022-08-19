<script>
import { onMount } from "svelte";
export let shape = 'a';

let reveal = false;
let ref;

const getVerticalPosRatio = (el)=>{
  let rect = el.getBoundingClientRect();
  let top = rect.y;
  let bot = window.innerHeight - (rect.y + rect.height);
  return top / bot;
}
onMount(()=>{
  console.log('blub mount');
  const check = ()=>{
    if(!ref) return;
    let r = getVerticalPosRatio(ref);
    if(r > 1 && r < 1.5){
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

<span bind:this={ref} class={`speechbubble shape-${shape} ${reveal?'reveal':'hidden'}`} >
  <div class="bubble">
    {#if shape === "a"} 
        <svg
          viewBox="0 0 493 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M490.264 226.216C490.26 241.237 477.925 253.326 462.609 253.322L403.978 253.307C401.146 291.376 429.243 314.965 403.593 291.205C377.943 267.445 390.757 277.613 368.217 253.298L30.3594 253.21C15.0425 253.207 2.71504 241.111 2.71924 226.09L2.77454 30.4869C2.77864 15.4659 15.113 3.37686 30.4298 3.38086L462.679 3.49286C477.996 3.49686 490.323 15.5919 490.319 30.6129L490.264 226.216V226.216Z"
            stroke="black"
            stroke-width="5"
            pathLength="1"
          />
        </svg>
      
    {:else if shape === "b"} 
        <svg
          width="495"
          height="303"
          viewBox="0 0 495 303"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.05516 225.559C3.05914 240.562 15.4296 252.636 30.7895 252.632L89.5889 252.617C92.4291 290.639 64.2514 314.198 89.9751 290.468C115.699 266.737 102.848 276.893 125.453 252.608L464.28 252.52C479.641 252.517 492.004 240.436 492 225.433L491.945 30.0725C491.94 15.0701 479.571 2.99601 464.21 3L30.7194 3.11186C15.3584 3.11586 2.99597 15.1959 3.00001 30.1983L3.05516 225.559V225.559Z"
            stroke="black"
            stroke-width="5"
            pathLength="1"
          />
        </svg>
      {:else if shape === "c"} 
        <svg
          width="494"
          height="306"
          viewBox="0 0 494 306"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M490.945 78.1927C490.941 63.0388 478.596 50.8428 463.267 50.8469L404.588 50.862C401.754 12.456 429.874 -11.3417 404.203 12.6286C378.532 36.5988 391.356 26.3408 368.798 50.8711L30.6629 50.9598C15.3334 50.9629 2.9958 63.1659 3 78.3199L3.05535 275.654C3.05945 290.808 15.404 303.004 30.7334 303L463.337 302.887C478.667 302.883 491.004 290.681 491 275.527L490.945 78.1927V78.1927Z"
            stroke="black"
            stroke-width="5"
            pathLength="1"
          />
        </svg>
      {:else if shape === "d"} 
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
</span>
// <svelte:window on:scroll={onScroll} />

<style>
  .speechbubble {
    display: inline-block;
    position: relative;
  }

  .speech {
    display: inline-block;
    padding: 20px;
    transition: opacity 0.3s linear;
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
    animation: svg_dash .5s ease-out forwards;
  }
  


  
  :is(.shape-a, .shape-b) .speech {
    padding-bottom: 13%;
  }
  :is(.shape-c, .shape-d) .speech {
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
