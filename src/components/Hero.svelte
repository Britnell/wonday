<script>
    // TODO
    // - [ ] use rem in hero

	import { onMount } from 'svelte';

    let initialDelay = 100;
    let init = true;
    let animation = ' ';
    let lastAnim = 0;


    onMount(()=>{
        setTimeout(()=>{
            init = false;
            animation = 'in'
            lastAnim = Date.now();
        }, initialDelay)
    })
    
    let timerRef;

    const onScroll = ()=>{
        const t_anim = 2600;
        let pos = (window.scrollY < 50) ? 'in' : 'out';

        if(timerRef) clearTimeout(timerRef);
        if(animation===' ') return;
        if(animation===pos) return;
        
        const t = Date.now() - lastAnim;

        if(t > t_anim) {
            animation = pos;
            lastAnim = Date.now()
            return;
        }
        
        timerRef = setTimeout(()=>{
            animation = pos;
            lastAnim = Date.now()
        }, t_anim - t)
    }
</script>

<div>
    <div class="hero">
        <div class="left"></div>
        <h1 class={`tommy ${animation}`} class:init  >
            <span class=""><span><span><span>T</span></span></span></span>
            <span class="o"><span class="hov">o</span></span> 
            <span class="m1">
                <span style="--m: 0">
                    <span style="--m: 1">
                        <span style="--m: 2">
                            <span style="--m: 3">
                                m
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <span class="m2">
                <span style="--m: 0">
                    <span style="--m: 1">
                        <span style="--m: 2">
                            <span style="--m: 3">
                                m
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <span class="y"><span class="slide">y</span></span>

        </h1>
        <div class="right"></div>
    </div>
</div>

<svelte:window on:scroll={onScroll}></svelte:window>


<style>
    .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        height: 500px;
    }

    .init {
        position: relative;
    }

    .left, .right {
        flex: 1;
        height: 100%;
        --g1: transparent 10vw;
        --g2: white 15vw;
        z-index: 2;
    }
    .left {
        background: linear-gradient(to left, var(--g1), var(--g2));
    }
    .right {
        background: linear-gradient(to right, var(--g1), var(--g2));
    }


    .tommy {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;        
        font-size: 16vw;
        
        margin: 0;
        display: flex;
        
    }
    .tommy span {
        display: inline-block;
    }
    

    @keyframes m_roll_in {
        from {
            transform: rotate(-90deg);
        }
    }
    @keyframes m_roll_out {
        to {
            transform: rotate(-90deg);
        }
    }

    .m1 {
        --t-roll: 0.2s;
        --h-top: 32%;
        --h-bottom: 22%;
        --delay: 0s;
    }

    .init .m1 span {            
            transform: rotate(-90deg);
    }
    
    .m1 > span {
        transform-origin: 0% calc( 100% - var(--h-bottom));
    }
    .m1 > span > span {
        transform-origin: 0% var(--h-top);
    }
    .m1 > span > span > span {
        transform-origin: 100% var(--h-top);
    }
    .m1 > span > span > span > span{
        transform-origin: 100% calc( 100% - var(--h-bottom));
    }

    .m1 span {
        --delay-out: calc( var(--m) * var(--t-roll) + var(--delay));
        --delay-in: calc( (3 - var(--m)) * var(--t-roll) + var(--delay));
    }

    .in .m1 span {
        animation: m_roll_in var(--t-roll) var(--delay-in) ease-in-out both;
    }
    .out .m1 span {
        animation: m_roll_out var(--t-roll) var(--delay-out) ease-in-out both;
    }

    
    .m2 {
        --t-roll: 0.2s;
        --h-top: 32%;
        --h-bottom: 22%;
        --delay: 0.3s;
    }

    
    .init .m2 span {            
        transform: rotate(90deg);
    }
    .m2 > span {
        transform-origin: 100% calc( 100% - var(--h-bottom));
    }
    .m2 > span > span {
        transform-origin: 100% var(--h-top);
    }
    .m2 > span > span > span {
        transform-origin: 0% var(--h-top);
    }
    .m2 > span > span > span > span{
        transform-origin: 0% calc( 100% - var(--h-bottom));
    }
    

    span {
        --delay-out: calc( var(--m) * var(--t-roll) + var(--delay));
        --delay-in: calc( (3 - var(--m)) * var(--t-roll) + var(--delay));
    }
    
    .in .m2 span {
        animation: m2_roll_in var(--t-roll) var(--delay-in) ease-in-out both;
    }
    .out .m2 span {
        animation: m2_roll_out var(--t-roll) var(--delay-out) ease-in-out both;
    }


    
    @keyframes m2_roll_in {
        from {
            transform: rotate(90deg);
        }
    }
    @keyframes m2_roll_out {
        to {
            transform: rotate(90deg);
        }
    }


    @keyframes o_roll_in {
        from {
            transform-origin: var(--tf-origin);
            transform: translateX(-600px) rotate(-1080deg);
        }
    }
    @keyframes o_roll_out {
        to {
            transform-origin: var(--tf-origin);
            transform: translateX(-600px) rotate(-1080deg);
        }
    }

    .o {

        --tf-origin: 50% 55%;
        transform-origin: var(--tf-origin);
    }    
    
    .init .o {
        transform: translateX(-600px);
    }
    .in .o {
        animation: o_roll_in 1.6s .6s ease-in-out both;
    }    
    .out .o {
        animation: o_roll_out 1.6s .3s ease-in-out both;
    }
    
    .o .hov {
        transform-origin: var(--tf-origin);
        transition: transform .3s ease-in-out;
    }
    .tommy.in:hover .o .hov {
        transform: rotate(60deg);
    }
    
    
    .y {
        --y-dist: 30vw;
        --y-hop-s: -5vw;
        --y-hop-l: -10vw;
        
     
        
        --t-b: .25s;
        --t-b-s: .2s;
        --t-total: calc( 6 * var(--t-b) + 2 * var(--t-b-s) );
        --t-delay: .6s;
        /* delay + 6 --t-b + 2 --t-b-s */
    }

    .init .y {
        transform: translateX(var(--y-dist));
    }
    .out .y {
        animation: y_bounce_out var(--t-b) calc(2 * var(--t-b-s) + var(--t-delay)) cubic-bezier(0, 0, 0.18, 1) 6 alternate, 
        y_bounce_out_s var(--t-b-s) var(--t-delay)  cubic-bezier(0, 0, 0.18, 1) 2 alternate;
    }
    .out .y .slide {
        animation: y_slide_out var(--t-total) var(--t-delay) linear both;
    }
    .in .y {
        animation: y_bounce_in var(--t-b)  var(--t-delay) cubic-bezier(0, 0, 0.18, 1) 6 alternate,
        y_bounce_in_s var(--t-b-s) calc(6 * var(--t-b) +  var(--t-delay)) cubic-bezier(0, 0, 0.18, 1) 2 alternate;
    }
    .in .y .slide {
        animation: y_slide_in var(--t-total) var(--t-delay) linear both;
    }
    
    @keyframes y_bounce_out_s {
        to {
            transform: translateY(var(--y-hop-s));
        }
    }
    @keyframes y_bounce_in_s {
        to {
            transform: translateY(var(--y-hop-s));
        }
    }
    @keyframes y_bounce_out {
        to {
            transform: translateY(var(--y-hop-l));
        }
    }
    @keyframes y_bounce_in {
        to {
            transform: translateY(var(--y-hop-l));
        }
    }
    
    @keyframes y_slide_in {
        from {
            transform: translateX(var(--y-dist));;
        }
    }
    @keyframes y_slide_out {
        to {
            transform: translateX(var(--y-dist));;
        }
    }

    

</style>