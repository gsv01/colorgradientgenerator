import React from 'react';
import './info.css'

import {useSelector } from 'react-redux';
import {selectData} from './reducer';


 


export const Info = () => {
 
  const data = useSelector(selectData);
  // alert(data.bgcolor1);

  const x1STYLE = {
    backgroundColor:  data.bgcolor1  
  };  


  const x2STYLE = {
    backgroundColor:  data.bgcolor2
  };  

  
  const copyText = "background: linear-gradient(to left," + data.bgcolor1   + ',' +  data.bgcolor2   +" )";

  const infoSTYLE = {
    background:  'linear-gradient(to left,' + data.bgcolor1  + ','+data.bgcolor2 +')'
  };  

  return (
        <div className="contentContainer">
        <div style={infoSTYLE} className="projector"> </div>

        <div className="info">


          <table>
            <tr>
              <td> The first color is <u>{x1STYLE.backgroundColor}</u> </td>
              <td> <div style={x1STYLE} className="color1"></div> </td>
            </tr>
            <tr>
              <td> The second color is  <u>{x2STYLE.backgroundColor}</u> </td>
              <td> <div style={x2STYLE}  className="color2"></div> </td>
            </tr>

            <tr><td align="center" rowSpan='2'>
              <input 
                className="copyfrom"
                value={copyText} ></input>
            </td></tr>
          </table>
          
        </div>
      </div>
    );
}
