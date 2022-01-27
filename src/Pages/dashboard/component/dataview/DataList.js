import React from 'react';

const DataList = ({posts}) => {
  return (<div>
      <div className="dataview">
       <div className="dataview__content">
       <table>
            <thead>
              <tr>
              <th>Model</th>
              <th>Typecode</th>
              <th>SerialNumber</th>
              <th>Registered</th>
              <th>Category Description</th>
              <th>Status</th>
              <th>Registration</th>
              <th>Icao</th>
              <th>Name</th>
              <th>Linenumber</th>
              <th>Type</th>
              <th>Operator</th>
              <th>Callsign</th>
              <th>OperatorIcao</th>
              <th>OperatorIata</th>
              <th>Owner</th>
              <th>Test Reg</th>
              <th>Registered</th>
              <th>Reguntil</th>
              <th>Built</th>
              <th>First Flight Date</th>
              <th>Seat Configuration</th>
              <th>Engines</th>
              <th>Modes</th>
              <th>Adsb</th>
              <th>Acars</th>
              <th>Notes</th>
              <th>Category Description</th>
              <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{post.model}</td>
                  <td>{post.typecode}</td>
                  <td>{post.serialnumber}</td>
                  <td>{post.registered}</td>
                  <td>{post.categorydescription}</td>
                  <td>{post.status}</td>
                  <td>{post.registration}</td>
                  <td>{post.manufacturericao}</td>
                  <td>{post.manufacturername}</td>
                  <td>{post.linenumber}</td>
                  <td>{post.icaoaircrafttype}</td>
                  <td>{post.operator}</td>
                  <td>{post.operatorcallsign}</td>
                  <td>{post.operatoricao}</td>
                  <td>{post.operatoriata}</td>
                  <td>{post.owner}</td>
                  <td>{post.testreg}</td>
                  <td>{post.registered}</td>
                  <td>{post.reguntil}</td>
                  <td>{post.built}</td>
                  <td>{post.firstflightdate}</td>
                  <td>{post.seatconfiguration}</td>
                  <td>{post.engines}</td>
                  <td>{post.modes}</td>
                  <td>{post.adsb}</td>
                  <td>{post.acars}</td>
                  <td>{post.notes}</td>
                  <td>{post.categorydescription}</td>
                  <td>{post.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
     </div>
  </div>)
};

export default DataList;
