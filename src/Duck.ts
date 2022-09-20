import {  Bird} from './Bird';
import { IcanFly } from './ICanFly';
import { ICanSwin } from './ICanSwin';
import { ICanWalk } from './ICanWalk';


class Duck extends Bird implements ICanWalk, ICanSwin, IcanFly {

public color: string;


constructor(color: string, name: string, lifetime: number, size: number, weight: number,canFly : boolean){
    super (name,lifetime,size,weight, canFly);
    this.color = color;
}


public fly(): void {
    console.log(`${this.name} starts to fly!`);   
}

public swin(): void {
    console.log(`${this.name} starts to swin!`); 
}

public walk(): void {
    console.log(`${this.name} starts to walk!`);    
}
}

export { Duck }; 