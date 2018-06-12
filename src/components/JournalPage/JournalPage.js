import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './JournalPage.css';

const JournalPage = (props) =>  {
    
  const renderPage = () => {
    
   if (props.visibilityLP) {
    return (
      <div className="centered">
        <ToggleButton 
        onClick={props.onClick}
        position="left" 
        visibility={props.visibilityLP}/>
      </div>
    )
   }
     return (
       <div className="journalPage">
        <ToggleButton 
        onClick={props.onClick}
        position="left" 
        visibility={props.visibilityLP}/>
      </div>
  )
}
  return (
    <div>
      {renderPage()}
    </div>
  );

};


export default JournalPage;
