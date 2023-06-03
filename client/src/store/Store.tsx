import create from 'zustand';
import {Fixture, Mover} from '../components/fixture'
import Group from '../components/group'
// Define a state
type FixtureState = {
  fixtures: Fixture[];
  groups: (Group & { expanded: boolean })[];
  expandGroup: (group: Group) => void;
  addFixture: (fixture: Fixture) => void;
  removeFixture: (fixture: Fixture) => void;
  addGroup: (group: Group) => void;
  removeGroup: (group: Group) => void;
};

// Create a store
export const useStore = create<FixtureState>((set) => ({
  fixtures: [],
  groups: [],
  expandGroup: (groupToExpand) =>
        set((state) => ({
        groups: state.groups.map((group) =>
            group === groupToExpand 
            ? { ...group, expanded: !group.expanded} 
            : group
        )
        })),
  
  addFixture: (fixture) => set((state) => ({ fixtures: [...state.fixtures, fixture] })),
  removeFixture: (fixture) => set((state) => ({ fixtures: state.fixtures.filter((f) => f !== fixture) })),
  addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
  removeGroup: (group) => set((state) => ({ groups: state.groups.filter((g) => g !== group) })),
}));