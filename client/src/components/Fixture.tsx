import Group from './Group'
// Define the parent class, Fixture
export class Fixture {
    name: string;
    // groups: Group[];
    constructor(name: string, groups: Group[] = []) {
      this.name = name;
    //   this.groups = groups;
    }
  
    // ... other shared methods or properties for fixtures
  }
  
  // Define the Pars class
export class Par extends Fixture {
    // Add properties specific to Pars
    specificParsProperty: string;
  
    constructor(name: string, groups: Group[] = [], specificParsProperty: string) {
      super(name, groups); // Call parent constructor
      this.specificParsProperty = specificParsProperty;
    }
  
    // ... other methods or properties for Pars
  }
  
  // Define the Movers class
  export class Mover extends Fixture {
    // Add properties specific to Movers
    specificMoversProperty: string;
  
    constructor(name: string, groups: Group[] = [], specificMoversProperty: string) {
      super(name, groups); // Call parent constructor
      this.specificMoversProperty = specificMoversProperty;
    }
  
    // ... other methods or properties for Movers
  }