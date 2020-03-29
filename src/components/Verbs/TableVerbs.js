import React from 'react';
import './verbs.css';

const TableVerbs = ({table, regular}) => {
  return(
    <div className="container-table-verbs-pb">
      <table className="table-verbs-pb">
          <thead>
            <tr>
              <th>Significado</th>
              <th>Infinitivo</th>
              <th>Pasado</th>
              <th>Participio</th>
            </tr>
          </thead>
          {
            table.map ( item => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.translation}</td>
                  <td>{item.infinitive}</td>
                  <td>{item.past}<span className={ `${regular ? 'end-verbs' :  'end-verbs-none'}`}>ed</span></td>
                  <td>{item.participle}<span className={ `${regular ? 'end-verbs' :  'end-verbs-none'}`}>ed</span></td>
                </tr>
              </tbody>
            ))
          }
      </table>
    </div>
  )
} 

export default TableVerbs;
