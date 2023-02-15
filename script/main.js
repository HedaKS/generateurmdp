

const listeMinuscule = "azertyuiopqsdfghjklmwxcvbn";
const listeMajuscule = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const listeNombre = "0123456789";
const listeSymbols = ',;:!ù$@"';

function afficheTailleMdp() {
    let tailleMdp = document.getElementById("tailleMdp").value;
    document.getElementById("affichageTailleMdp").value = tailleMdp;
}

function myFunction() {

    let data=[];

    let password = "";

    if(minuscule.checked){
        for (let index = 0; index < listeMinuscule.length; index++) {
            data.push(listeMinuscule[index]);
        }
    }

    if(majuscule.checked){
        for (let index = 0; index < listeMajuscule.length; index++) {
            data.push(listeMajuscule[index]);
        }
    }

    if(nombre.checked){
        for (let index = 0; index < listeNombre.length; index++) {
            data.push(listeNombre[index]);
        }
    }

    if(symbole.checked){
        for (let index = 0; index < listeSymbols.length; index++) {
            data.push(listeSymbols[index]);
        }
    }


    for (let i = 0; i < tailleMdp.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    let myH2 = document.querySelector("h2");
    myH2.innerHTML = password;

    if (data.length == 0){
        myH2.innerHTML = "Générateur de MDP";
        alert("erreur");
    }

  }
  
  var button = document.getElementById("genererBouton");
  button.addEventListener("click", myFunction);



























































    // //DATA : tableau qui contient toutes les caractères activés

    // let data=[];

    // // Pour ajouter des données dans un tableau il faut faire data.push(donneaajoute)

    // // data.push(listeMinuscule,listeMajuscule,listeNombre,listeSymbols);

    // //password est une chaine de caractères vides au départ : password = ""

    // let password = "";

    // //pour verifier qu'une checkbox est cochée: iddelacheckbox.checked
    // // exemple pour minuscule : if(minuscule.checked){ajouter touets les minuscules dans data}

    // if(minuscule.checked){
    //     for (let index = 0; index < listeMinuscule.length; index++) {
    //         data.push(listeMinuscule[index]);
    //     }
    // }

    // console.log(data)

    // //Verifier que data n'est pas vide : si c'est le cas mettre une alerte

    // if (data.length == 0){
    //     alert("erreur");
    // }

    // // Boucle qui va à être répéter le nombre de fois choisi par l'utilisateur dans le range (tailleMdp)
    // // j'ajoute dans password un caractère au hasard de DATA

    // for (let i = 0; i < tailleMdp.value; i++) {
    //     password += data[Math.floor(Math.random() * data.length)];
    // }

    // console.log(password);

    // Afficher dans le h2 le mot de passe généré
    // let myH2 = document.querySelector("h2");
    // myH2.innerHTML = password;
    
    // // Toute cette fonction doit être éxécutée au moment où on appuie sur générer le mot de passe
    // // addEventListener("click", nomFonction)