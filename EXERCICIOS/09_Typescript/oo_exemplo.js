var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed, playsFetch) {
        var _this = _super.call(this, name, age, breed) // call parent constructor
         || this;
        _this.playsFetch = playsFetch;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'woof woof');
    };
    Dog.prototype.getAgeInHumanYears = function () {
        return this.age * 7;
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, breed) {
        return _super.call(this, name, age, breed) || this;
    }
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'meow meow');
    };
    return Cat;
}(Animal));
var dog1 = new Dog("Napoleao", 4, "Pastor Alemao", true);
var cat1 = new Cat("Felix", 2, "Angora");
dog1.makeSound();
cat1.makeSound();
