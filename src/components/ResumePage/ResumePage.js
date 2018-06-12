import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ResumePage.css';

const ResumePage = (props) =>  {
  
  const renderPage = () => {
    if (props.visibilityRP) {
        return (
          <div className="centeredR">
          <ToggleButton 
          onClick={props.onClick}
          position="right"
          visibility={props.visibilityRP}/>
          </div>
        )
       };
       return (
        <div className="resumePage">
        <ToggleButton 
        onClick={props.onClick}
        position="right"
        visibility={props.visibilityRP}/>
        </div>
      )
      };

      return (
        <div>
          {renderPage()}
        </div>
      );
    };


export default ResumePage;
