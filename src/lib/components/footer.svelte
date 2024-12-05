<footer>
    <p>&copy; 2024 Ocean World. All rights reserved. | Follow us on <a href="#">Social Media</a></p>
</footer>
<style>
    /* Footer styles */
    footer {
        background-color: #162751;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        margin-top: 20px;
    }

    footer a {
        color: #b2dfdb;
        text-decoration: none;
    }

    footer a:hover {
        color: #ffffff;
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
