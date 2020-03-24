import { Weapon } from './weapon';
export class Hero {
    // variables d'instance
    private _name: string;
    private _pv: number;
    private _pvMax: number;
    private _defense: number;
    private _weapon: Weapon;
    private createWeapon = new Weapon (0,0,0);

    // constructeur
    constructor(name: string) { // ce qu'on veut pour le Hero, on le fait passer en params
        this._name = name// this est un objet défini par la class, notre futur objet
        this._pv = Math.floor(Math.random() * 50 + 50) + 1 // Limite de 100 PV
        this._pvMax = this._pv
        this._defense = Math.floor(Math.random() * 10)
        this._weapon = this.createWeapon
    }

    get Name() {
        return this._name
    }

    set Name(name) {
        this._name = name
    }

    get Pv() {
        return this._pv
    }

    set Pv(pv) {
        this._pv = pv
    }

    get PvMax() {
        return this._pvMax
    }

    set PvMax(pvMax) {
        this._pvMax = pvMax
    }

    get Defense() {
        return this._defense
    }

    set Defense(defense) {
        this._defense = defense
    }


    //Methods
    // public attack(hero: Hero) {
    //     let punch: number = attaque du Hero - defense du hero
    // }



}