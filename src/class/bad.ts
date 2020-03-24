import { Weapon } from './weapon';
import { Hero } from './hero';
export class Bad extends Hero { // extends
    // variables d'instance

    // constructeur
    constructor(name: string) {
        super(name);
        this.Name = this.randomName();
    }

    randomName = () => {
        let name = Math.random().toString(20).replace(/[^a-z]+/g, '')
        return name[0].toUpperCase() + name.substring(1)
    }
    

}