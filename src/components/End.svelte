<script>
    import Bubble from "../components/Bubble.svelte";
  </script>



<div class="container">
        <div class="more">
            <Bubble shape="b" thresh={0} >
                <div class="content">
                    <p>
                        There's currently a lot of exciting things happening in web development. 
                        
                        I'm trying to stay up to date while staying agnostic and flexible, so I can chose the right tools and tech stack for the right job.
                    </p>
                </div>
            </Bubble>
        </div>
</div>


<style>
    .container {
        margin-bottom: 200px;
    }

    .more {
        margin: 0 auto;
        width: fit-content;
    }

  .content {
    width: 80vw;

    height: 290px;
    font-family: "Roboto", sans-serif;
    font-size: 4vw;

    display: flex;
    align-items: center;
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