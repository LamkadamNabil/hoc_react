
import React, { Component } from 'react';
import countHits from './countHits';
import vegeta from './vegeta.jfif'
class Vegeta extends Component {
 
  render() {
    const {name,life ,addone ,hocState}=this.props
    const lifevalue=life>0 ? (  <td>
        {life} %
    </td>) :(<td>Mort</td>) ;
        const button1=life>0  ? (<button onClick={addone}  className='btn btn-success m-3'>{name} Frappe</button>)
        : (<button onClick={addone} disabled={true}  className='btn btn-danger m-3'> {name} Mort</button>) ;
    return <div className='col'>
                        <img src={vegeta} alt="vegeta"/><hr/>
                            {    button1 }                     
                       <table className='table table-striped'>
                        <thead>
                              <tr>
                              <th scope='col'>Coups</th>
                              <th scope='col'>vie</th>
                              </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {hocState.hits}
                                </td>
                                    {lifevalue} 
                            </tr>
                        </tbody>
                            
                        </table>

    </div>;
  }
}

export default countHits(Vegeta,10)