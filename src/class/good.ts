import { Weapon } from './weapon';
import { Hero } from './hero';
export class Good extends Hero { // extends
    // variables d'instance

    // constructeur
    constructor(name: string) {
        super(name);
    }


    // Methods

    // Methode soin personnage
    // @return Pv
    public heal(cible: Hero) {
        let healing = (this.Pv * 25) / 100;
        this.Pv += healing;
        return this.Pv;
    }


}