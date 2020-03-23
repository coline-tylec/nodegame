class Hero {
    // variables d'instance
    private _name: string;
    private _pv: number;
    private _pvMax: number;
    private _defense: number;

    // constructeur
    constructor(name = "Hero") {
        this._name = name
        this._pv = Math.floor(Math.random() * 100 + 100)
        this._pvMax = Math.floor(Math.random() * 100 + 100)
        this._defense = Math.floor(Math.random() * 100 + 100)
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get pv() {
        return this._pv
    }

    set pv(pv) {
        this._pv = pv
    }

    get pvMax() {
        return this._pvMax
    }

    set pvMax(pvMax) {
        this._pvMax = pvMax
    }

    get defense() {
        return this._defense
    }

    set defense(defense) {
        this._defense = defense
    }


}