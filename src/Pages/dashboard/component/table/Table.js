import React from "react";
import "./Table.css";
import table from "../data/tabledata.json";

const Table = () => {
  return (
    <div className="table-whole">
      <div className="table">
        <div className="table__content">
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Typecode</th>
                <th>SerialNumber</th>
                <th>Registered</th>
                <th>Category Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {table.map((post, index) => (
                <tr key={index}>
                  <td>{post.model}</td>
                  <td>{post.typecode}</td>
                  <td>{post.serialnumber}</td>
                  <td>{post.registered}</td>
                  <td>{post.categorydescription}</td>
                  <td>{post.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
