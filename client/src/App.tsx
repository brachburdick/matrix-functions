import React, {useState} from 'react'
import Panel from './containers/Panel'
import './styles.scss'
import Slider from './components/Slider'
import Group, {GroupProps} from './components/Group';
import {useStore} from './store/Store'
import {Fixture, Mover} from './components/Fixture'
import Stage from './components/stage'

const PANEL_HEIGHT = 300
const PANEL_WIDTH = 600

const App: React.FC = () => {
  // Read from the store
  //the function returns a flattened array of arrays of each group's fixtures vvv
  const fixtures = useStore((state) => state.groups.map(group => group.fixtures).flat());
  const groups = useStore((state) => state.groups);
  const nextID = useStore((state) => state.nextID);
  const selectedGroup = useStore((state) => state.groups.filter((group) => group.selected));

  // Get the action functions
  const addFixture = useStore((state) => state.addFixture);
  const removeFixture = useStore((state) => state.removeFixture);
  const addGroup = useStore((state) => state.addGroup);
  const removeGroup = useStore((state) => state.removeGroup);
  const expandGroup = useStore((state) => state.expandGroup)
  const updateNextID = useStore((state)=> state.updateNextID)
  const selectGroup = useStore((state) => state.selectGroup);

  // AddGroup click event handler
  const handleAddGroupClick = () => {
    const groupName = `Group ${groups.length + 1}`;
    addGroup(new Group(groupName, []));
  };
  const handleAddFixtureClick = (updatedGroup:Group) => {
    const fixtureName = `Fixture ${fixtures.length + 1}`;
    addFixture(updatedGroup);
  };
  const handleExpandGroupClick = (group : Group) =>{
    expandGroup(group)
  }
  const handleRemoveFixtureClick = (group : Group, fixture:Mover) =>{
    if(confirm(`Are you sure you want to delete ${fixture.name}?` )){
      removeFixture(group,fixture)
    }
  }
  const handleRemoveGroupClick = (group : Group) =>{
    if(confirm(`Are you sure you want to delete ${group.name}?` )){
      removeGroup(group)
    }
  }
  const handleSelectionClick = (group : Group) =>{
    selectGroup(group)
  }


//Setup summary information
let summaryContent = []
for (let g of groups){

  //Determine if a group's children (fixtures) will be shown.
  let groupChildren = [];
  if(g.expanded === true){
    //if expanded, show the fixtures of that group
    for(let f of g.fixtures){
    groupChildren.push(
        <ul key={f.name} className='fixture'>
          {f.name} 
          <button onClick={() => handleRemoveFixtureClick(g,f)}> - </button> 
        </ul>
      )}
    //add fixture
    groupChildren.push(<ul className='fixture' onClick={() => handleAddFixtureClick(g)}> *Add a Fixture* </ul>)
  }

  


  //create a group for each state.group, adding children
  summaryContent.push(
      <ul key={g.name} className= {`group ${g.selected? 'selected' : ''}`} >
        <button onClick={() => handleExpandGroupClick(g)}>{g.expanded ? '🔽  ' : '◀️  '} </button>
        {g.name} 
        <button onClick ={()=> handleSelectionClick(g)}>{g.selected? '☑️' : '⬜️'}</button>
        <button onClick = {()=>handleRemoveGroupClick(g)}> - </button>
        <br></br>
        {groupChildren}
      </ul>)
  }
//add group
summaryContent.push(<ul className='group' onClick={handleAddGroupClick}> *Add a Group* </ul>)
summaryContent.push(<ul className='group' onClick={()=>{groups.forEach((g)=>console.log(...g.fixtures));console.log('fixtures: ', fixtures)}}> CLICK ME </ul>)

//----------------------------------------------------------------


    return (
      <div className = "panel">
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>
       
        <Stage/>
      </Panel>
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>
        Summary
        {summaryContent}
        </Panel>
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>
        
        </Panel>
      </div>
    );
  };
  
  export default App;
