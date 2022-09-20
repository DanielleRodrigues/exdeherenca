import { Duck } from './Duck';
import { IcanFly } from './ICanFly';
import { ICanSwin } from './ICanSwin';
import { ICanWalk } from './ICanWalk';

const duck = new Duck('preto', 'Patolino', 7 , 50, 2, true);


function takeOff(animal: IcanFly) {
    animal.fly();
}


function dive(animal: ICanSwin) {
    animal.swin();
}

function impulse(animal: ICanWalk) {
    animal.walk();
} 


takeOff(duck);
impulse(duck);
dive(duck);