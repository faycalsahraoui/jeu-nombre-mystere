const mystere = Math.floor(Math.random()*1000) +1;
const input = document.getElementById('inputEssai');
const messageAffiché = document.getElementById('message');
const resultatFinal = document.getElementById('resultatFinal')
function verifierNombre() {
    const essai = parseInt(input.value);
    if (isNaN(essai)){
        messageAffiché.innerText = "Veuillez entrez un nombre valide.";
        return;
    }
    if (essai > mystere) {
    messageAffiché.innerText="Trop grand";
    } else if (essai=== mystere) {
    messageAffiché.innerText="Bravo, vous avez gagné !";
    document.getElementById('resultatFinal').innerText="Le nombre mystère etais bien " + mystere;
    } else{
        messageAffiché.innerText="Trop petit";
    }
    input.value = ""
    input.focus();
}
       
    input.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            verifierNombre()
        }
 });



  









