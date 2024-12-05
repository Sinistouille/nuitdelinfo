<script>
    // Vous pouvez ajouter des données dynamiques ici si nécessaire.
    import Menu from '$lib/components/menu.svelte';
    import Footer from '$lib/components/footer.svelte';
</script>

<div class="container">
    <Menu></Menu>
    <div class="content">
        <main>
            <h1>Welcome to Ocean World</h1>
            <p>Explore the depths of the ocean and its wonders. Learn about marine life, oceanography, and how to protect our seas.</p>
            <section id="about">
                <h2>About the Ocean</h2>
                <p>The ocean covers over 70% of our planet and is home to an incredible diversity of life. Dive in to discover more!</p>
            </section>
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
        padding: 20px;
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