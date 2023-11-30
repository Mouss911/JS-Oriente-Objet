class Utilisateur {
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

class Admin extends Utilisateur {
    //methode accessible uniquement aux admins
    supprimerUtilisateurs(util){
        utilisateurs = utilisateurs.filter(utilisateur => {
            return utilisateur.email != util.email;
        });
    }
}

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Charle');7
const util2 = new Utilisateur('Blaise Toin',  'blaise@gmail.com', 'Gloria', 'Juice');
const admin = new Admin('Chance Key', 'chance@gmail.com', 'Jonathan', 'Moise');

let utilisateurs = [util1, util2, admin];
console.log(utilisateurs);

admin.supprimerUtilisateurs(util1);
console.log(utilisateurs);
