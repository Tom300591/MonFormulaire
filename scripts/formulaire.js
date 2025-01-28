export default class Formulaire{

    

    //Définition du constructeur

    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }

    

    getDiv(id) {
        return document.getElementById(id).parentNode;
    }

    getElement(id) {
        return document.getElementById(id);
    }

   

    //Méthode permettant de masquer un élément sans animation

    maskChamp(id) {
        this.getDiv(id).classList.add("masque");
        this.getElement(id).required = false;
    }

    //Méthode permettant de afficher le champ

    showChamp(id) {
        this.getDiv(id).classList.remove("disp");
        this.getDiv(id).classList.add("app");
        this.getElement(id).required = true;
    }

    //Méthode parmettant de masquer le champ avec animation

    hideChamp(id) {
        this.getDiv(id).classList.remove('app');
        this.getDiv(id).classList.add('disp');
        this.getElement(id).required = false;
    }

    //Méthode permettant de savoir si un radio est selectionné
    isSelected(id, value, action, otherAction) {
        this.formdata = new FormData(this.formulaireHtml);
        if (this.formdata.get(id) == value) {
            action();            
        }
        else {
            otherAction();
        }
    }

    //méthode pour récupérer les éléments de chaque input et la ajouter à answers
    getAnswers() {
        this.formdata = new FormData(this.formulaireHtml);
        this.formdata.forEach((key,value) => {
            if (value != "" && value != "on") {
                this.answers.push([key,value]);
            
            }
        }
    )
    return this.answers
    }

    //Méthode pour afficher dans un alert les résultats

    affAnswers() {
        let chaine = 'récapitulatif\n\n';
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne[1]} : ${ligne[0]} \n`
        }
        alert(chaine)
    }

}