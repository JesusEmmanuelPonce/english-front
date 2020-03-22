import React from 'react';
import './loader.css';
import { Roller } from 'react-awesome-spinners';

const Loader = ({ loading }) =>(
            <div className="container-loader-pb">
              {
                  loading && <Roller 
                    size='80'
                    color='#000'
                  />
              }
            </div>
    )

export default Loader;