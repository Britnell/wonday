<script>
    import Bubble from "../components/Bubble.svelte";
  </script>



<div class="container">
    <div class="more">
        <Bubble shape="b" thresh={0} >
            <div class="content">
                <p>That feels like a lot, doesn't it ... </p>
            </div>
        </Bubble>
        <div class="outro">
            <p>
                There's currently a lot of exciting things happening in web development. 
                I'm trying to stay up to date while staying agnostic and flexible, so I can chose the right 
                tools and tech stack for the right job.
            </p>
            <p>
                Today there are so many different combinations of tech stacks. 
                I think With a strong knowledge of the foundations of web html and css.
                we can stay framework agnostic and pick each for its strengths and weaknesses.<br/>
                I'm relatively new to web development so I'm enjoying not being locked in to one framework 
                and am ready to jump into new frameworks coming out. <br/>
                Im enjoying learning how every framework does things a little differently, and so 
                learning a lot about fundamentals and dis/-advantages of each framework.
                I actually found that learning svelte and solid helped me understand react better. 
                learning about Remix and Astro taught me about the dis/-advantages of next js.
                <br/>
            </p>
            <p>
                There’s currently a lot of exciting things happening in web development, 
                but the choice in tech stack can be a little overwhelming for a developer
                to choose what to focus on.
            </p>
            <p>
                I’m trying to stay as up to date as I can, while also stayin agnostic
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