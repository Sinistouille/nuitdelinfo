<script>
    import logorace from "$lib/assets/logo race water.jpg"

    let showPopUp = $state(true);
</script>
{#if showPopUp}
    
<div id="consentBox">
    <img src={logorace} alt="Logo" />
    <div id="consentContent">
        <header id="consentHeader">
            Votre confidentialité, notre priorité.
        </header>
        <p id="cookie_para">
            Nous utilisons les cookies pour vous offrir une expérience optimale.
            <br />Nous utilisons les cookies à des fins légitimes de marketing,
            <br />grâce à nos <u>1017 partenaires</u>.
        </p>
        <div class="buttons">
            <button class="consentButton" onclick={() => showPopUp = false}>Accepter</button>
            <button class="rejectButton">En savoir plus</button>
        </div>
    </div>
</div>
{/if}

<style>
    #consentBox {
  background: #fff;
  padding: 20px;
  max-width: 30%;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.consentButton.red {
  background-color: red;
}

#consentBox.hide {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

::selection {
  color: #fff;
  background: #5ac0f1;
}

#consentContent p {
  color: #858585;
  margin: 10px 0 20px 0;
}

#consentContent .buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.consentButton,
.rejectButton {
  padding: 12px 30px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consentButton {
  background: #5ac0f1;
  margin-right: 10px;
}

.rejectButton {
  color: #111211;
  background: transparent;
  border: 2px solid #5ac0f1;
  text-decoration: none;
}

#consentBox img {
  max-width: 90px;
}

#consentHeader {
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
}

</style>