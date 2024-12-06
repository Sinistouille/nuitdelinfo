<script>
    let { children } = $props();

    // Vous pouvez ajouter des données dynamiques ici si nécessaire.
    import Menu from '$lib/components/menu.svelte';
    import Footer from '$lib/components/footer.svelte';
</script>

<div class="container">
    <Menu></Menu>
    <div class="content">
        <main>
            {@render children()}
        </main>
        <Footer></Footer>
    </div>
</div>
<style>
    .container {
        display: flex;
        min-height: 100vh;
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