var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (!name || name.length > 20) {
                throw new Error('Name invalid');
            }
            else {
                this._name = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var PetStore = /** @class */ (function () {
    function PetStore() {
        this._dogs = [new Dog(), new Dog()];
        this._dogs[0].name = 'Fido'; // chama o 'set'
        this._dogs[1].name = 'Leopoldo'; // chama o 'set'
    }
    PetStore.prototype.printAllDogNames = function () {
        this._dogs.forEach(function (dog) {
            console.log(dog.name); // chama o 'get'
        });
    };
    return PetStore;
}());
var ps = new PetStore();
ps.printAllDogNames();
