<script>
    import Bubble from "../components/Bubble.svelte";
    import Button from "../components/Button.svelte";

  </script>



<div class="container">
        <div class="after">
            <Bubble shape="b" reveal={true} >
                <div class="content">
                    <p>
                        There's currently a lot of exciting things happening in web development. 
                        
                        I'm trying to stay up to date while staying agnostic and flexible, so I can chose the right tools and tech stack for the right job.
                    </p>
                </div>
            </Bubble>            
        </div>
        <div class="more">
            <Bubble shape="c" thresh={20}  >
                <div class="content">
                    <h3>Who is this guy?</h3>
                    <p>
                        To find out more about me and see some of my work
                    </p>
                    <a class="button font-display" href="/work">MORE</a>
                </div>
            </Bubble>
        </div>
</div>


<style>
    .container {
        margin-bottom: 200px;
    }

    .after {
        margin: 0 auto;
        width: fit-content;
        --bubble-thickness: 2;
        --bubble-padding: 40px;
    }

    .after .content {
        width: 60vw;
        max-width: 600px;

        height: 27vw;
        max-height: 265px;

        font-family: "Roboto", sans-serif;
        font-size: min(3.5vw, 30px);

        display: flex;
        /* align-items: center; */
    }
    @media (max-width: 700px){
        .after .content {
            --bubble-padding: 20px;
        }
    }

    .more {
        margin: 0 auto;
        width: fit-content;
        margin-top: 100px;
        
        --bubble-thickness: 2;
        --button-background: #000;
    }

    .more .content {
        width: 80vw;
        max-width: 400px;

        height: 25vw;
        max-height: 220px;
        font-family: "Roboto", sans-serif;
        font-size: min(4vw, 30px);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .more h3 {
        width: 100%;
    }

    
    .button {
        color: var(--button-color,#fff );
        background-color: var(--button-background,#25a);
        border-radius: var(--button-border-radius, .5em);
        padding: var(--button-padding, .2em .4em );
    }

  .outro {
    max-width: 700px;
    margin: 0 auto;
  }

  .outro p {
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    line-height: 1.5;
    margin: 32px 0;
  }
</style>