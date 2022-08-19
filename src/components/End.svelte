<script>
    import Bubble from "../components/Bubble.svelte";
  </script>



<div class="container">
    <div class="more">
        <!-- <Bubble shape="b" thresh={0} >
            <div class="content">
                <h3>That feels like a lot, doesn't it ... </h3>
            </div>
        </Bubble> -->
        <div class="outro">
            <p>
                There’s currently a lot of exciting things happening in web development, 
                but the choice in tech stack can be a little overwhelming for a developer
                to choose what to focus on.
            </p>
            <p>
                I’m trying to stay as up to date as I can, 
                and I’m finding that every new framework I learn teaches me a little
            </p>
        </div>
    </div>
</div>


<style>
    .container {
        margin-bottom: 200px;
    }

    .more {
        margin-left: 10%;
        /* margin-left: auto; */
    }

  .content {
    width: 600px;
    height: 290px;
    font-family: "Roboto", sans-serif;
    font-size: 40px;

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