import React from 'react';


const ToggleButton = (props) =>  {



    const togglePagePosition = () => {
      console.log(props.visibility)
        if (props.position === 'left') {
        if (props.visibility) {
          return ( <button onClick={props.onClick}> {'x'} </button>)
         }
          return  <button onClick={props.onClick}> {'>'} </button>;
        } else if (props.position === 'right'){
          if (props.visibility) {
          return  <button onClick={props.onClick}> {'x'} </button>
          }
          return  <button onClick={props.onClick}> {'<'} </button>
        }
    }


    return (
      <div className="ToggleButton">
      {togglePagePosition()}
      </div>
    );
  }


export default ToggleButton;
