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

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Alice', 'Grace');
const util2 = new Utilisateur('Blaise Huu', 'blaise@gmail.com', 'Jonathan');
console.log(util1);
console.log(util2);

util1.login();
util1.logout();

util2.login();
util2.logout();