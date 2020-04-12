import React from 'react';
import './family.css'
import Header from '../../header';
import FAMILY from '../../../constant/FAMILY';
 
const Family = () => {

    return(
        <>
            <Header
                title="Familia"
            />

            <div className="container-family-pb">
                {
                    FAMILY.map(item=>(
                        <div className="box-family-pb" key={item.member_en}>
                            <span className="family-tag-pb">{item.member_en}</span> - <span>{item.member_sp}</span>
                        </div>
                    ))
                }
            </div>

        </>

    )
}

export default Family;