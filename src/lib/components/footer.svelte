<footer>

    <div>
        <p class="anim">Contactez nous</p>
        <p class="anim">Instagram</p>
        <p class="anim">Facebook</p>

    </div>
</footer>
<style>
    /* Footer styles */
    footer {
        background-color: #11111180;
        color: #ffffff;
        text-align: center;
        margin: 20px 0 0 0;
        display : flex;
    }

    footer p {
        text-decoration: none;
        color: white;
        font-weight: bold;
        text-shadow: black 0.1em 0.1em 0.2em;
        opacity: 1;
        margin: 0;
        padding: 20px;
    }


    footer div {
        margin : 0 5% 0 5%;
    }
    .anim{
        animation-duration: 3s;
        animation-name: slidein;

    }

    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }

</style>
<script>
    import {gsap} from "gsap";

    function moveLink(id){
        const element = document.getElementById(id);

        if (!element) {
            console.error(`Element with id "${id}" not found.`);
            return;
        }
        gsap.timeline()
            .to(element, { x: -20, duration: 0.1 }) // Move left
            .to(element, { x: 20, duration: 0.1 })  // Move right
            .to(element, { x: -20, duration: 0.1 }) // Move left
            .to(element, { x: 20, duration: 0.1 })  // Move right
            .to(element, { x: 0, duration: 0.1 });
    }
</script>
