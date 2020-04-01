import React from 'react';
import './cardNationalities.css';

const TableNationalities = ({ card }) => {
    return(
        <div className="container-card-pb">
          {
            card.map( item => (
                <div className="card-nationality" key={item.id}>
                    <div className="container-img-pb">
                        <img className="img-nationalities-pb"
                            alt="example"
                            src={item.flag}
                        />
                    </div>
                    <div className="container-tag-pb">
                        <span className="tag-card-pb">Country</span>
                        <p>{item.country_english}</p>

                        <span className="tag-card-pb">Pais</span>
                        <p>{item.country_spanish}</p>

                        <span className="tag-card-pb">Nationality</span>
                        <p>{item.nationality_english}</p>

                        <span className="tag-card-pb">Nacionalidad</span>
                        <p>{item.nationality_spanish}</p>
                    </div>
                </div>
              ))
          }
      
        </div>
    )
}

export default TableNationalities;