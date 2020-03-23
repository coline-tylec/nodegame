class Voiture {
    // variables d'instance
    private _marque: string;
    private _couleur: string;

    // variables de classe
    private static _nbDeVoiture: number;

    //constructeur
    constructor(marque = "", couleur = "") {
        this._marque = marque
        this._couleur = couleur
        Voiture._nbDeVoiture += 1
    }

    // getters/setters
    get marque() {
        return this._marque
    }

    set marque(marque: string) {
        this._marque = marque
    }

    get couleur() {
        return this._couleur
    }

    set couleur(couleur: string) {
        this._couleur = couleur
    }

    //méthodes d'instance
    rouler = (vitesse: number) => {
        console.log(`je roule à ${vitesse} km/h`)
    }
}