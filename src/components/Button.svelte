<script>

    export let link = '#';


</script>

<a class="button font-display" href={link}><slot/></a>

<style>

    .button {
        color: var(--button-color,#fff );
        background-color: var(--button-background,#25a);
        border-radius: var(--button-border-radius, .5em);
        padding: var(--button-padding, .2em .4em );
    }
    
</style>