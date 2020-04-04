import React from 'react';
import './family.css';

const TableFamily = ({table}) => {
    return(
        <div className="container-family-pb">
            {
                table.map(item => (
                    <p>
                        <span>{item.member_en}</span> - <span>{item.member_sp}</span>
                    </p>
                ))
            }
        </div>
    )
}

export default TableFamily;