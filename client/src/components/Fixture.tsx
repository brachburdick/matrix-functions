import Group from './Group'
// Define the parent class, Fixture
export class Fixture {
        name: string;
        id: number;
        libid: number;
        r: number;
        g: number;
        b: number;
        alpha: number;

        constructor(name: string, id: number, libid: number, r: number, g: number, b: number, alpha: number) {
          this.name = name;
          this.id = id;
          this.libid = libid;
          this.r = r;
          this.g = g;
          this.b = b;
          this.alpha = alpha;
        }
      }  

  // Define the Pars class
export class Par extends Fixture {
    constructor(name: string, id: number, libid: number, r: number, g: number, b: number, alpha: number) {
      super(name, id, libid, r, g, b, alpha); // Call parent constructor
    }
    // ... other methods or properties for Pars
    }
  
  // Define the Movers class
  export class Mover extends Fixture {
    // Add properties specific to Movers
    rotation: number;
    tilt: number;
    // Call parent constructor
      constructor(name: string, id: number, libid: number, r: number, g: number, b: number, alpha: number, rotation: number,tilt:number) {
        super(name, id, libid, r, g, b, alpha);
        this.rotation = rotation;
        this.tilt = tilt;
    }
    // ... other methods or properties for Movers
    }