<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import logo from '$lib/assets/Lyreco_Logo.png'

  let tl;
  let isPaused = false;

  // Initialisation de l'animation
  onMount(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(".circle-image", {
      opacity: 1,
      y: height,
      duration: 1,
    })
      .to(".circle-image", {
        duration: 2,
        rotation: 27,
        x: 0,
        y: 0,
      }, 1.5)
      .to(".circle-image", {
        duration: 2,
        x: width / 2,
        y: 0,
      }, 2)
      .to(".circle-image", {
        duration: 2,
        rotation: 180,
        x: width / 2,
        y: height / 1.1,
      }, 3)
      .to(".circle-image", {
        duration: 2,
        rotation: 180,
        x: width / 1.1,
        y: height / 1.1,
      }, 4.5)
      .to(".circle-image", {
        duration: 2,
        rotation: 180,
        x: 0,
        y: height / 1.1,
      }, 6)
      .to(".circle-image", {
        duration: 2,
        rotation: 180,
        x: width / 1.1,
        y: 0,
      }, 6.4);
  });

  // Fonction pour gérer le clic
  function toggleAnimation() {
    if (isPaused) {
      tl.play(); 
    } else {
      tl.pause(); 
    }
    isPaused = !isPaused;
  }
</script>

<div class="circle-image-container">
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

    <img src={logo} class="circle-image" alt="Circling Image" onclick={toggleAnimation}/>
    
    
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

