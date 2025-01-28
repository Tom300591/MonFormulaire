import Formulaire from "../scripts/formulaire.js";

//Créer les formulaire

const formulaire = new Formulaire("formulaire");

formulaire.maskChamp("societe");

formulaire.maskChamp("email");

formulaire.formulaireHtml.style.display = "none";

//addEventListener pour changer le comportement en fonction du radio coché

formulaire.getElement("particulier").addEventListener("change", () => {
  formulaire.hideChamp("societe");
});

formulaire.getElement("professionnel").addEventListener("change", () => {
  formulaire.showChamp("societe");
});

//addEventListener pour changer le comprotement en fonction de objet

formulaire.getElement("objet").addEventListener("change", () => { formulaire.isSelected('objet', 'demande_de_contact', () => formulaire.showChamp('email'), () => formulaire.hideChamp('email'))})

//addEventListener pour récupérer les données du formulaire

formulaire.formulaireHtml.addEventListener('submit',
    (event) => {
        event.preventDefault(); //pour l'exercice on désactive l'action par défaut du bouton submit
        formulaire.affAnswers();
        formulaire.formulaireHtml.reset();
    }
)

 //addEventListener permettant d'afficher et masquer le formulaire

    formulaire.getElement("showForm").addEventListener("click", () => { 
      if ((formulaire.formulaireHtml.style.display == "block")) {
        formulaire.formulaireHtml.style.display = "none";
        formulaire.getElement("showForm").innerText = "Afficher le formulaire";
      } else {
        formulaire.formulaireHtml.style.display = "block";
        formulaire.getElement("showForm").innerText = "Masquer le formulaire";
      }
        
      
    })

