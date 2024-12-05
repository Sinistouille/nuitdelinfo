<nav class="sidebar">
    <ul>
        <li id="1" on:mouseenter={() => roulette()}><a href="#home">Home</a></li>
        <li id="2" on:mouseenter={() => roulette()}><a href="#about">About the Ocean</a></li>
        <li id="3" on:mouseenter={() => roulette()}><a href="#gallery">Gallery</a></li>
        <li id="4" on:mouseenter={() => roulette()}><a href="#contact">Contact</a></li>
    </ul>
</nav>
<style>
    nav {
        width: 250px;
        color: #ffffff;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        background: #162751ff;
        font-weight: bold;
    }

    nav ul {
        list-style: none;
        padding: 0;
    }

    nav li {
        margin: 20px 0;
        align-content: center;
        display: flex;
        align-items: center;
    }

    nav a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1.2em;
        margin: auto;
        width: auto;
        transition: color 0.3s ease;
    }

    nav a:hover {
        color: #162751ff;
        /*casual cursor*/
        cursor: default;
    }
</style>
<script>
    import { onMount } from 'svelte';
    import { gsap} from 'gsap';
    import {random} from "gsap/gsap-core";


function roulette(){
    console.log(random(0, 4));
}
</script>