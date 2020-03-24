export class Weapon {
    // variables d'instance
    private _minAttack : Number;
    private _maxAttack : Number;
    private _criticalShot : Number;

    constructor(_minAttack: Number, _maxAttack: Number, _criticalShot: Number){
        this._minAttack = Math.floor(Math.random() * 10) + 1;
        this._maxAttack = Math.floor(Math.random() * 10) + 11;
        this._criticalShot = Math.floor(Math.random() * 20) + 1;
    }

    get MinAttack(){
        return this._minAttack
    }

    set MinAttack(minAttack) {
        this._minAttack = minAttack
    }

    get MaxAttack(){
        return this._maxAttack
    }

    set MaxAttack(maxAttack : Number) {
        this._maxAttack = maxAttack
    }
    get CriticalShot(){
        return this._criticalShot
    }
    set CriticalShot(criticalShot : Number) {
        this._criticalShot = criticalShot
    }

}
