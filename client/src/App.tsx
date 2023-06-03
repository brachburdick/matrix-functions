import React, {useState} from 'react'
import Panel from './containers/Panel'
import './styles.scss'
import Slider from './components/Slider'
import Group, {GroupProps} from './components/Group';
import {useStore} from './store/Store'
import {Fixture} from './components/Fixture'
const PANEL_HEIGHT = 300
const PANEL_WIDTH = 600

const App: React.FC = () => {
  // Read from the store
  const fixtures = useStore((state) => state.fixtures);
  const groups = useStore((state) => state.groups);

  // Get the action functions
  const addFixture = useStore((state) => state.addFixture);
  const removeFixture = useStore((state) => state.removeFixture);
  const addGroup = useStore((state) => state.addGroup);
  const removeGroup = useStore((state) => state.removeGroup);
  const expandGroup = useStore((state) => state.expandGroup)

  // AddGroup click event handler
  const handleAddGroupClick = () => {
    const groupName = `Group ${groups.length + 1}`;
    addGroup(new Group(groupName, []));
  };
  const handleAddFixtureClick = () => {
    const fixtureName = `Fixture ${fixtures.length + 1}`;
    
    addFixture(new Fixture(fixtureName, []));
  };
  const handleExpandGroupClick = (group : Group) =>{
    expandGroup(group)
  }

//Setup summary information
let summaryContent = []
for (let g of groups){
  summaryContent.push(<li key={g.name} className='group' onClick={() => handleExpandGroupClick(g)}> {g.name}</li>)
  if(g.expanded === true){
  for(let f of g.fixtures){
  summaryContent.push(<li key={f.name} className='fixture'> {f.name} </li>)
  }
  summaryContent.push(<li className='fixture' onClick={handleAddFixtureClick}> *Add a Fixture* </li>)
}}
summaryContent.push(<li className='group' onClick={handleAddGroupClick}> *Add a Group* </li>)




    return (
      <div className = "panel">
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>Stage</Panel>
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>
        Summary
        {summaryContent}
      </Panel>
      <Panel height={PANEL_HEIGHT} width= {PANEL_WIDTH}>Functions</Panel>
      </div>
    );
  };
  
  export default App;
