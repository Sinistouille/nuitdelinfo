<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    onMount(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        var tl = gsap.timeline();

        tl.from(".circle-image", {
            opacity: 0, 
            y: height, 
            duration: 1 })
        .to(".circle-image", {
            duration: 1,  
            x: width/2,
            y: 0
        })
        .to(".circle-image", {
            duration : 1,
            rotation : 180,
            x: width/2, 
            y: height/1.1,
            rotate: 27
        })
        .to(".circle-image", {
            duration : 1,
            rotation : 180,
            x: width/1.1, 
            y: height/1.1
        })
        .to(".circle-image", {
            duration : 1,
            rotation : 180,
            x: 0, 
            y: height/1.1
        })
        .to(".circle-image", {
            duration : 2,
            rotation : 180,
            x: width/1.1, 
            y: 0
        });
        tl.yoyo(true).repeat(-1);
        
    });
</script>

<div class="circle-image-container">
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

    <img src="https://via.placeholder.com/100" class="circle-image" alt="Circling Image" />
    
    
    <div class="box gradient-green green"></div>
    <div class="box gradient-purple purple"></div>
    <div class="box gradient-blue blue"></div>
</div>

<style>
	.box {
		width: 100px;
		height: 100px;
		background: black;
	}

    .circle-image-container {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: linear-gradient(to bottom, #eef2f3, #8e9eab);
    }

    .circle-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #f8b500;
    }
</style>

