<script>
    import background from "$lib/assets/parallax wall.jpg";
</script>

<div
    class="HeaderRoot HeaderContent"
    style="background-image: url({background});"
>
    <div class="HeaderContent">
        <h1 class="HeadingTitle">Welcome to Ocean World</h1>
        <section id="about" class="HeaderSection">
            <p>
                Explore the depths of the ocean and its wonders. Learn about marine
                life, oceanography, and how to protect our seas.
            </p>
        </section>
    </div>
</div>

<h2>About the Ocean</h2>
<p>
    The ocean covers over 70% of our planet and is home to an
    incredible diversity of life. Dive in to discover more!
</p>

<style>
    .HeaderRoot {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        min-height: 90dvh;
        padding-top: 50px;
        padding-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .HeaderContent {
        display: flex;
        flex-direction: column;
    }
    .HeaderSection {
        color: #ffffff;
        font-size: 20px;
        text-align: center;
    }
    .HeadingTitle {
        color: #ffffff;
        font-size: 70px;
        font-weight: 900;
        text-transform: none;
        line-height: 1em;
        letter-spacing: 4.7px;
        font-family: "DM Sans", serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>
