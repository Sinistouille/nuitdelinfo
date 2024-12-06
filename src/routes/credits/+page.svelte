<script>
    function loadSvelte(){
        const div = document.getElementById("prev-svelte");

        if(!div){
            return
        }
        if(div.innerHTML !== "")
            div.innerHTML = "";
        else
            div.innerHTML = "<iframe src=\"https://svelte.dev\" title=\"Svelte Website Preview\" frameborder=\"0\" width=\"" + window.innerWidth * 0.8 + "\" height=\"" + window.innerHeight * 0.9 + "\"></iframe>";
    }
</script>

<div class="remerciements">
    <p>Ce Site a été développé avec la technologie <a id="btn-svelte" onclick={() => loadSvelte()}>Svelte</a>(Cliquez dessus pour prévisualiser)</p>
    <div id="prev-svelte"></div>
    <p>Le code source de ce projet se trouve en libre accès sur <a href="https://github.com/Sinistouille/nuitdelinfo/">Github</a></p>
    <p>L'équipe SudoSourceSociety ayant travaillé sur le projet est composé de :</p>
    <ul>
        <li>
            Anaïs
        </li>
        <li>
            Ilyas
        </li>
        <li>
            Victor
        </li>
        <li>
            Virgil
        </li>
        <li>
            Alexandre
        </li>
        <li>
            Mohamed
        </li>
        <li>
            Quentin
        </li>
        <li>
            Lysiane
        </li>
        <li>
            Adrien
        </li>
        <li>
            Thomas
        </li>
        <li>
            Yoann
        </li>
        <li>
            Yonatan
        </li>
        <li>
            Yacine
        </li>
        <li>
            Maxence
        </li>
    </ul>
    <p>Nous nous sommes répartis en 3 équipe : Designer, Redacteur & Développeur</p>
    <p>L'objectif du Designer était de concevoir la partie graphique de l'application qui consistait en le maquettage de celle-ci mais aussi <br>
        les éléments graphiques tels que les logos</p>
    <p>
        Pour les rédacteurs, il s'agissait de faire des recherches afin de mettre du contenu dans l'application Web.<br>
        Cela prévoyait donc les recherches liées aux quizz
    </p>
    <p>Le rôle du développeur était donc de concevoir l'application. Comme vous avez pu le voir, nous avons utilisé essentiellement la framework Svelte <br>
    Cela nous a permit de faciliter la rédaction de l'application. Les animations ont été réalisés grâce à <a href="https://gsap.com/">GSAP</a>
    </p>
    <div id="loag-gsap"></div>
</div>

<style>
    p {
        color: white;
        font-weight: bold;
        margin: 20px;
    }
    ul{
        color: white;
        display: flex;
        font-weight: bolder;
        justify-content: space-around;
        list-style: none;
        margin: 20px;
        text-shadow: black 1px 1px;

    }
    li{
        margin: 10px;
    }
    a {
        color: #62B3E4ff;;
        text-decoration: underline;
    }
    #prev-svelte{
        position: fixed;
    }
    .remerciements{
        background-color: #00000099;
        height: 100%;
        padding: 20px 0 0 50px;
        border-top-left-radius: 10px;
    }
</style>