<footer>
    <div>
        <p>Race for water</p>
        <p>lorem ipsum dolor sit amet</p>
        <p>©2024 Race for water, All rights reserved</p>
    </div>
    <div>
        <p>Tags</p>
        <p>lorem ipsum dolor sit amet</p>
    </div>  
</footer>
<style>
    /* Footer styles */
    footer {
        background-color: #162751;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        margin-top: 20px;
        display : flex;
    }

    footer a {
        color: #b2dfdb;
        text-decoration: none;
    }

    footer a:hover {
        color: #ffffff;
    }

    footer div {
        margin : 0 5% 0 5%;
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
