export class Weapon {
    // variables d'instance
    private _minAttack : number;
    private _maxAttack : number;
    private _criticalShot : number;

    constructor(_minAttack: number, _maxAttack: number, _criticalShot: number){
        this._minAttack = Math.floor(Math.random() * 10) + 1;
        this._maxAttack = Math.floor(Math.random() * 10) + 11;
        this._criticalShot = Math.floor(Math.random() * 20) + 1;
    }

    get MinAttack() : number{
        return this._minAttack
    }

    set MinAttack(minAttack: number) {
        this._minAttack = minAttack
    }

    get MaxAttack() : number{
        return this._maxAttack
    }

    set MaxAttack(maxAttack : number) {
        this._maxAttack = maxAttack
    }
    get CriticalShot() : number{
        return this._criticalShot
    }
    set CriticalShot(criticalShot : number) {
        this._criticalShot = criticalShot
    }

}
