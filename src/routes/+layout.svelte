<script>
    let { children } = $props();
    let showMenu = $state(false);
    import background from "$lib/assets/parallax wall.jpg"

    // Vous pouvez ajouter des données dynamiques ici si nécessaire.
    import Menu from '$lib/components/menu.svelte';
    import Footer from '$lib/components/footer.svelte';
    import CookieCauchemar from '$lib/components/cookie_cauchemar.svelte'
</script>

<CookieCauchemar />
<div class="container">
    {#if showMenu}
        <Menu></Menu>
    {:else}
        <button class="hamburger-button" onclick={() => showMenu = !showMenu}>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </button>
    {/if}
    <div class="content"  style='background-image: url({background});'>
        <main>
            {@render children()}
        </main>
        <Footer></Footer>
    </div>
</div>
<style>
    main{
        margin-left: 20px;
    }
    /* Bouton hamburger */
    .hamburger-button {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    /* Lignes du menu */
    .hamburger-button .line {
        width: 100%;
        height: 5px;
        background-color: #ffffff;
        border-radius: 2px;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .container {
        display: flex;
        height: 100%;
    }

    /* Main content styles */
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    h2 {
        color: #004d40;
        margin-top: 30px;
    }

    p {
        margin: 10px 0;
    }
</style>