<script>
    let ref;
    
    let val = 0;

    const scroll = ()=>{
        if(!ref) return;
        let rect = ref.getBoundingClientRect()
        let y = ( window.innerHeight - rect.bottom);
        const dist = 300;
        if(y<0) val = 0;
        else if(y>dist) val = 1;
        else val = y / dist;
    }
</script>
<div bind:this={ref}>
    <h3 class="more font-display" style={`--s: ${val}`}>MORE ?</h3>
</div>
<svelte:window on:scroll={scroll} />

<style>
    .more {
        font-size: min(20vw, 240px);
        text-align: center;
        font-weight: 700;
        white-space: nowrap;

        color: #000;
        opacity: var(--s);
        --d: calc( 100px * ( var(--s) - 0.5) );
        transform: translateX(var(--d));
        transition: all 0.3s linear;
    }
</style>