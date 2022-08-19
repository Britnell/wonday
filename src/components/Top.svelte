<script>
  import Bubble from "../components/Bubble.svelte";
</script>

<div class="container">
  <Bubble shape="d"  >
    <div class="content">
      <h2 class="hi">Hi</h2>
      <h3 class="sub">Welcome to my homepage</h3>
    </div>
  </Bubble>
</div>

<style>
  .container {
    display: flex;
    justify-content: end;
  }

  .content {
    max-width: 600px;
    font-family: "Roboto", sans-serif;
  }

  .hi {
    font-size: 80px;
  }
  .sub {
    font-size: 60px;
  }
</style>
