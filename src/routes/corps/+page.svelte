<script>
    import human_body from "$lib/assets/Human_With_All_Organs.png";
    let clickedPart = ""; // Variable pour stocker la partie cliquée 

    function handleClick(event) {
        // Obtenez les dimensions de l'image
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left; // Position X relative à l'image
        const y = event.clientY - rect.top; // Position Y relative à l'image

        // zone du clique
        if (x > 200 && x < 240 && y > 250 && y < 300) {
            clickedPart = "cœur";
        } else if (x > 100 && x < 270 && y > 360 && y < 500) {
            clickedPart = "foie";
        } else if (x > 150 && x < 270 && y > 0 && y < 100) {
            clickedPart = "cerveau";
        } else if (x > 100 && x < 290 && y > 200 && y < 350 ) {
            clickedPart = "poumons";
        } else {
            clickedPart = "inconnu"; // Si le clic est en dehors des zones définies
        }
    }
</script>

<h1>Cliquer sur l'image pour identifier une partie</h1>
<div class="body-wrapper">
    <img
        src={human_body}
        alt="Image anatomique"
        on:click={handleClick}
        style="width: 400px; height: auto; border: 1px solid black;"
    />

    <div class="info">
        Partie identifiée : {clickedPart}
    </div>
</div>

<style>
    .body-wrapper {
        display: flex;
        justify-content: center;
        gap: 100px;
    }
    .info {
        margin-top: 10px;
        font-size: 18px;
        color: darkblue;
    }
</style>
