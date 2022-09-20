"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('preto', 'Patolino', 7, 50, 2, true);
function takeOff(animal) {
    animal.fly();
}
function dive(animal) {
    animal.swin();
}
function impulse(animal) {
    animal.walk();
}
takeOff(duck);
impulse(duck);
dive(duck);
