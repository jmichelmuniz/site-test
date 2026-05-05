function showInfo (id) {
    if (id === 'cio') {
        document.getElementById("personagem-info").innerHTML = '<div class="row">   <div class="column"><img src="images/cio2.jpg" alt="Ciocie Cioelle"></div>   <div class="column"><img src="images/cio.jpg" alt="Ciocie Cioelle, fanfiction writer"></div>   <div class="column"><img src="images/cio1.jpg" alt="Ciocie Cioelle, christmas"></div>   </div>   <p class="center">Ciocie Cioelle, Blue Devil</p>';
    } else if (id === 'white-chain') {
        document.getElementById("personagem-info").innerHTML = '<div class="row">   <div class="column"><img src="images/white-chain1.jpg" alt="White Chain"></div>   <div class="column"><img src="images/white-chain2.jpg" alt="White Chain Human Form"></div>   <div class="column"><img src="images/white-chain.jpg" alt="White Chain Spirit Form"></div>   </div>   <p class="center">82 White Chain Born in Emptiness Returns to Subdue Evil</p>';
    } else {
        document.getElementById("personagem-info").innerHTML = "<p>Erro</p>";
    }

}