abstract class Animal {

    public name: string;
    public lifetime: number;
    public size: number;
    public weight: number;


  constructor(name: string, lifetime: number, size: number, weight: number){
    this.lifetime = lifetime
    this.name = name;
    this.size = size;
    this.weight = weight;
  }
}

export {Animal}; 