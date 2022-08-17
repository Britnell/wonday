<script>
	import { onMount } from 'svelte';

    let init = true;
    let animation = ' ';

    let lastAnim = 0;

    onMount(()=>{
        setTimeout(()=>{
            init = false;
            animation = 'in'
            lastAnim = Date.now();
        },1000)
    })
    
    let timerRef;

    const onScroll = ()=>{
        const t_anim = 2600;
        let pos = (window.scrollY < 80) ? 'in' : 'out';

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
        </div>
        <div>
            <button on:click={()=>animation = (animation==='in'?'out':'in')}>Flip</button>
        </div>
</div>

<svelte:window on:scroll={onScroll}></svelte:window>


<style lang="scss">
    .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        height: 600px;
    }

    .init {
        position: relative;
    }

    .tommy {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;        
        font-size: 140px;
        
        margin: 0;
        display: flex;
        
        span {
            display: inline-block;
        }
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
        
        .init & span {            
                transform: rotate(-90deg);
        }
        & > span {
            transform-origin: 0% calc( 100% - var(--h-bottom));
        }
        & > span > span {
            transform-origin: 0% var(--h-top);
        }
        & > span > span > span {
            transform-origin: 100% var(--h-top);
        }
        & > span > span > span > span{
            transform-origin: 100% calc( 100% - var(--h-bottom));
        }
        

        span {
            --delay-out: calc( var(--m) * var(--t-roll) + var(--delay));
            --delay-in: calc( (3 - var(--m)) * var(--t-roll) + var(--delay));
            
            .in & {
                animation: m_roll_in var(--t-roll) var(--delay-in) ease-in-out both;
            }
            .out & {
                animation: m_roll_out var(--t-roll) var(--delay-out) ease-in-out both;
            }
        }
    }

    
    .m2 {
        // * * * * * * * * * * * * * * * *    m2    * * * * * * * * * * * * * * * * 
        --t-roll: 0.2s;
        --h-top: 32%;
        --h-bottom: 22%;
        --delay: 0.3s;
        
        .init & span {            
                transform: rotate(90deg);
        }
        & > span {
            transform-origin: 100% calc( 100% - var(--h-bottom));
        }
        & > span > span {
            transform-origin: 100% var(--h-top);
        }
        & > span > span > span {
            transform-origin: 0% var(--h-top);
        }
        & > span > span > span > span{
            transform-origin: 0% calc( 100% - var(--h-bottom));
        }
        

        span {
            --delay-out: calc( var(--m) * var(--t-roll) + var(--delay));
            --delay-in: calc( (3 - var(--m)) * var(--t-roll) + var(--delay));
            
            .in & {
                animation: m2_roll_in var(--t-roll) var(--delay-in) ease-in-out both;
            }
            .out & {
                animation: m2_roll_out var(--t-roll) var(--delay-out) ease-in-out both;
            }
        }
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

        .init & {
            transform: translateX(-600px);
        }
        --tf-origin: 50% 55%;
        transform-origin: var(--tf-origin);
        
        .in & {
            animation: o_roll_in 1.6s .6s ease-in-out both;
        }
        
        .out & {
            animation: o_roll_out 1.6s .3s ease-in-out both;
        }

        .hov {
            transform-origin: var(--tf-origin);
            transition: transform .3s ease-in-out;
        }
    }    
    .tommy.in:hover .o .hov {
        transform: rotate(60deg);
    }
    
    
    .y {
        // * * * * * * * * * * * *     Y     * * * * * * * * * * * *
        --y-slide: translateX(300px);
        .init & {
            transform: var(--y-slide);
        }
        
        --t-b: .25s;
        --t-b-s: .2s;
        --t-total: calc( 6 * var(--t-b) + 2 * var(--t-b-s) );
        --t-delay: .6s;
        // delay + 6 --t-b + 2 --t-b-s 

        .out & {
            animation: y_bounce_out var(--t-b) calc(2 * var(--t-b-s) + var(--t-delay)) cubic-bezier(0, 0, 0.18, 1) 6 alternate, 
            y_bounce_out_s var(--t-b-s) var(--t-delay)  cubic-bezier(0, 0, 0.18, 1) 2 alternate;
        }
        .in & {
            animation: y_bounce_in var(--t-b)  var(--t-delay) cubic-bezier(0, 0, 0.18, 1) 6 alternate,
                       y_bounce_in_s var(--t-b-s) calc(6 * var(--t-b) +  var(--t-delay)) cubic-bezier(0, 0, 0.18, 1) 2 alternate;
        }

    }

    .y .slide {

        .in & {
            animation: y_slide_in var(--t-total) var(--t-delay) linear both;
        }
        .out & {
            animation: y_slide_out var(--t-total) var(--t-delay) linear both;
        }
    }

    
    @keyframes y_bounce_out_s {
        to {
            transform: translateY(-50px);
        }
    }
    @keyframes y_bounce_in_s {
        to {
            transform: translateY(-50px);
        }
    }
    @keyframes y_bounce_out {
        to {
            transform: translateY(-100px);
        }
    }
    @keyframes y_bounce_in {
        to {
            transform: translateY(-100px);
        }
    }
    
    @keyframes y_slide_in {
        from {
            transform: var(--y-slide);
        }
    }
    @keyframes y_slide_out {
        to {
            transform: var(--y-slide);
        }
    }

    

</style>