<script>
  function copyEmail() {
    let e =[ ['t','a','britnell'].join('.'),'gmail.com'].join('@')
    navigator.clipboard.writeText(e);
    alert(' Email copied to clipboard')
  }
</script>
<button on:click={copyEmail}>
  <span class="w-14 h-14 grid place-items-center hover:bg-gray-200">
    <img class="h-11 mr-1" src="/logos/email.svg" alt="Email" />
  </span>
</button>