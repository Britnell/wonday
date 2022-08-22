<script>
    import Bubble from "../components/Bubble.svelte";
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
                    <p>
                        To find out more about me and see some of my work
                    </p>
                    <a href="/work">See work</a>
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
        width: 80vw;
        max-width: 600px;

        height: 25vw;
        font-family: "Roboto", sans-serif;
        font-size: min(4vw, 30px);

        display: flex;
        /* align-items: center; */
    }

    .more {
        margin: 0 auto;
        width: fit-content;
        --bubble-thickness: 2;
        margin-top: 40px;
    }

    .more .content {
        width: 80vw;
        max-width: 400px;

        height: 25vw;
        font-family: "Roboto", sans-serif;
        font-size: min(4vw, 30px);

        display: flex;
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