import create from 'zustand';
import {Fixture, Mover} from '../components/fixture'
import Group from '../components/group'
// Define a state
type FixtureState = {
//   fixtures: Fixture[];
  groups: (Group & { expanded: boolean })[];
  fixtureCount: number;
  expandGroup: (group: Group) => void;
  addFixture: (group:Group, fixture:Fixture) => void;
  //removeFixture: (fixture: Fixture) => void;
  addGroup: (group: Group) => void;
  removeGroup: (group: Group) => void;
};

// Create a store
export const useStore = create<FixtureState>((set) => ({
//   fixtures: [],
  groups: [],
  fixtureCount: 0,
  expandGroup: (groupToExpand) =>
        set((state) => ({
        groups: state.groups.map((group) =>
          group === groupToExpand ? { ...group, expanded: !group.expanded} : group
        )})),
  
        addFixture: (updatedGroup, newFixture) =>
        set((state) => ({
          groups: state.groups.map((group) =>
            group === updatedGroup
              ? { ...group, fixtures: [...group.fixtures, newFixture] }
              : group
          )})),

  //removeFixture: (fixture) => set((state) => ({ fixtures: state.fixtures.filter((f) => f !== fixture) })),
  addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
  removeGroup: (group) => set((state) => ({ groups: state.groups.filter((g) => g !== group) })),
}));