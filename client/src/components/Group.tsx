// Group.tsx
import React from 'react';
import {Fixture} from './Fixture'
export interface GroupProps {

    
}
class Group {
    name: string;
    fixtures: Fixture[];
    expanded: boolean;
    selected: boolean;
    constructor(name: string, fixtures: Fixture[] = []) {
      this.name = name;
      this.fixtures = fixtures;
      this.expanded = false;
      this.selected = false;
    }
  
    // Add a method that allows adding a fixture to the group
    // addFixture(fixture: Fixture) {
    //   this.fixtures.push(fixture);
    // }
  
    // ... other methods or properties for Group
  }

export default Group;
