<script>
  import Bubble from "../components/Bubble.svelte";
</script>

<div class="container">
  <div class="bubble">
    <Bubble shape="a"  >
      <div class="content">
        <h3>
          <span class="hi">Hi</span>I'm a ...
        </h3>
      </div>
    </Bubble>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: end;
    margin-bottom: 80px;
  }

  .bubble {
    margin-right: 10%;
    margin-left: auto;
  }

  .content {
    width: 500px;
    font-family: "Roboto", sans-serif;
  }

  .content h3 {
    font-size: 80px;
  }
  .content .hi {
    font-size: 140px;
    line-height: 1.0;
    display: block;
  }
</style>
