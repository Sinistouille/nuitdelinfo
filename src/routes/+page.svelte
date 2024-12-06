<script>
    import background from "$lib/assets/parallax wall.jpg";
    import ChasseLogo from "$lib/components/chasse_logo.svelte";
</script>
<ChasseLogo />
<div class="HeaderRoot">
    <section id="about" class="HeaderSection">
        <h1 class="HeadingTitle"></h1>
        <p>
            Bienvenue dans une immersion unique qui changera votre rapport à l'océan

        </p>
    </section>
</div>
<div id="content-descriptor">
<p>
    Le but de cette expérience est de vous senbiliser à l'importance des océans dans la vie sur Terre.<br>
    Mais aussi que cet océan a certaines fonctions qui pourraient être assimilées à celles du corps humains
</p>
</div>
<style>
    #content-descriptor{
        margin: 20px;
    }
    .HeaderRoot {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.2);
        padding-top: 50px;
        padding-left: 20px;
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
