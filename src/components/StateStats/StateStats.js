import React, { useState, useEffect } from 'react';
import { fetchStateData } from '../../api';
import './StateStats.css';

const StateStats = () => {

    const [ stateData, setStateData ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setStateData( await fetchStateData() );
        }

        fetchApi();
    }, [setStateData] );

    return(
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <p className="container table-name center-align">Statewise Covid-19 Cases</p>
                        <div className="card-content">
                            <table className="grey lighten-1 responsive-table highlight">
                                <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th className="green lighten-2">Recovered</th>
                                    <th className="red lighten-2">Deaths</th>
                                </tr>
                                </thead>

                                <tbody>

                                { stateData.map((state,i) => 
                                    <tr key={i}>
                                        <td>{state.state}</td>
                                        <td>{state.confirmed}</td>
                                        <td>{state.active}</td>
                                        <td className="green lighten-2">{state.recovered}</td>
                                        <td className="red lighten-2">{state.deaths}</td>
                                    </tr>

                                )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StateStats