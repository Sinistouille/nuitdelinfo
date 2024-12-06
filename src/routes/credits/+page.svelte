<script>
    function loadSvelte(){
        const div = document.getElementById("prev-svelte");
        if(!div){
            return
        }
        if(div.innerHTML !== "")
            div.innerHTML = "";
        else
            div.innerHTML = "<iframe src=\"https://svelte.dev\" title=\"Svelte Website Preview\" frameborder=\"0\" width=\"70%\" height=\"400px\"></iframe>";
    }

    function unLoadSvelte(){
        const div = document.getElementById("prev-svelte");
        if(!div){
            return
        }
        div.innerHTML = "";
    }
</script>

<div class="remerciements">
    <p>Ce Site a été développé avec la technologie <a id="btn-svelte" onclick={() => loadSvelte()}>Svelte</a>(Cliquez dessus pour prévisualiser)</p>

    <div id="prev-svelte"></div>
</div>

<style>
    p {
        color: white;
        font-weight: bold;
        margin: 20px;
    }
    a {
        color: #162751;
        text-decoration: underline;
    }
</style>