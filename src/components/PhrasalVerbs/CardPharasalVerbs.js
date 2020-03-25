import React from 'react';
import { Card } from 'antd';

const CardPharasalVerbs = ({ table }) => {
    return(
        <div className="container-phrasal-pb">
            { table.map(item => (
                <div className="site-card-border-less-wrapper card-pb" key={item.id}>
                    <Card title={item.phrase} bordered={false} >
                        <span className="label-card-pb">Significado</span>
                        <p>{item.mean_spanish}</p>
                        <span className="label-card-pb">Ejemplo en ingles</span>
                        <p>{item.example_english}</p>
                        <span className="label-card-pb">Ejemplo en español</span>
                        <p>{item.example_spanish}</p>
                    </Card>
                </div>
                ))}
        </div>
    )
}

export default CardPharasalVerbs;