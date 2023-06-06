import create from 'zustand';
import {Fixture, Mover} from '../components/fixture'
import Group from '../components/group'
// Define a state
type FixtureState = {
//   fixtures: Fixture[];
  groups: (Group & { expanded: boolean })[];
  fixtureCount: number;
  nextID:number;
  updateNextID: () => void;
  expandGroup: (group: Group) => void;
  addFixture: (group:Group, fixture:Mover) => void;
  removeFixture: (group:Group, fixture: Mover) => void;
  addGroup: (group: Group) => void;
  removeGroup: (group: Group) => void;
  selectGroup: (group: Group) => void;
};

// Create a store
export const useStore = create<FixtureState>((set) => ({
    groups: [],
    fixtureCount: 0,
    nextID: 1001,
    updateNextID: ()=>set((state) => ({nextID: state.nextID + 1})),
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
    removeFixture: (updatedGroup,unFixture) =>
//look through each group until finding the one we're altering
//once finding the fixutre we're removing, filter that fixture out of the group
        set((state)=>({
        groups: state.groups.map((group) =>
            group === updatedGroup 
            ? {...group, fixtures: group.fixtures.filter(fixture => fixture !== unFixture )}
            :group
        )
        })),
    addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
    removeGroup: (updatedGroup) => 
        set((state) => ({ 
        groups: state.groups.filter((g) => g !== updatedGroup) 
    })),
    //given a particular group, check all groups in state.
        //you're going to update the state.selected groups, AND
        //you're going to update the state.groups.group.selected property.
    selectGroup: (group) => set ((state) => {
        let returnState = state;
        //lets define the object that will returned if we select an unselected group
        if (group.selected){
            //if we select a selected group, updated selectedGroup to null and set all groups to selected = false

            returnState = {...returnState, groups: (state.groups ? state.groups.map((g) =>  ({...g, selected: false})) : state.groups)}
    }else{
        //else, return with the correct selected Group and set only the selected group to selected.
        returnState = {...returnState, groups: (state.groups? state.groups.map((g)=> ({...g, selected: (g===group? true : false)})): state.groups)}
    }
        return returnState;
    })
}));