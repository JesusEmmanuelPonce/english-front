import React from 'react';
import './verbsStyle.css';

const TableVerbs = ({table, regular}) => {
  return(
    <div>
      <table>
          <tr>
            <th>Significado</th>
            <th>Infinitivo</th>
            <th>Pasado</th>
            <th>Participio</th>
          </tr>
          {
            table.map ( item => (
            <tr>
              <td>{item.translation}</td>
              <td>{item.infinitive}</td>
              <td>{item.past}<span className={ `${regular ? 'end-verbs' :  'end-verbs-none'}`}>ed</span></td>
              <td>{item.participle}<span className={ `${regular ? 'end-verbs' :  'end-verbs-none'}`}>ed</span></td>
            </tr>
            ))
          }
      </table>
    </div>
  )
} 

export default TableVerbs;
