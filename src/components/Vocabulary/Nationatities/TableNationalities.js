import React from 'react';
import './tableNationalities.css';

const TableNationalities = ({table}) => {
    return(
        <>
        <table className="table-verbs-pb">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Pais</th>
                    <th>Nationality</th>
                    <th>Nacionalidad</th>
                </tr>
            </thead>
            {
                table.map ( item => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.country_english}</td>
                        <td>{item.country_spanish}</td>
                        <td>{item.nationality_english}</td>
                        <td>{item.nationality_spanish}</td>
                        <td><img alt="flag" src={item.flag} className="img-natinolities-pb"/></td>
                    </tr>
                </tbody>
                ))
            }
        </table>
        </>
    )
}

export default TableNationalities;