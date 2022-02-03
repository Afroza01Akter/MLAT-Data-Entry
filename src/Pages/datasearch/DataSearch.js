import React, { useState } from "react";
import table from "../dashboard/component/data/tabledata.json";
import "./DataSearch.css";

const DataSearch = () => {
  const [searchdata, setSearchData] = useState("");

  return (
    <div>
      <div className="data-search">
        <div className="data-search__input">
          <input
            type="text"
            placeholder="Search Data by ICAO.........."
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
          />
        </div>
        {/* // For search Filtering data and show data */}
        

        {table
          .filter((val) => {
            if (searchdata == "") {
              return null;
            } else if (
              val.icao24.toLowerCase().includes(searchdata.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="data-show" key={key}>
              {/* //Left side Data */}
                <div>
                  <ul>
                    <li>
                      <span>ID:</span> <p>{val.id}</p>
                    </li>
                    <li>
                      <span>ICAO:</span> <p>{val.icao24}</p>
                    </li>
                    <li>
                      <span>Registration:</span> <p>{val.registration}</p>
                    </li>
                    <li>
                      <span>Manufacturer Icao:</span>{" "}
                      <p>{val.manufacturericao}</p>
                    </li>
                    <li>
                      <span>Manufacturer Name:</span>{" "}
                      <p>{val.manufacturername}</p>
                    </li>
                    <li>
                      <span>Model:</span> <p>{val.model}</p>
                    </li>
                    <li>
                      <span>Type Code:</span> <p>{val.typecode}</p>
                    </li>
                    <li>
                      <span>Serial Number:</span> <p>{val.serialnumber}</p>
                    </li>
                    <li>
                      <span>Line Number:</span> <p>{val.linenumber}</p>
                    </li>
                    <li>
                      <span>Icao Aircraft Type:</span>{" "}
                      <p>{val.icaoaircrafttype}</p>
                    </li>
                    <li>
                      <span>Operator:</span> <p>{val.operator}</p>
                    </li>
                    <li>
                      <span>Operator Callsign:</span>{" "}
                      <p>{val.operatorcallsign}</p>
                    </li>
                    <li>
                      <span>Operator Icao:</span> <p>{val.operatoricao}</p>
                    </li>
                    <li>
                      <span>Operator Iata:</span> <p>{val.operatoriata}</p>
                    </li>
                    <li>
                      <span>Owner:</span> <p>{val.owner}</p>
                    </li>
                  </ul>
                </div>

                {/* //Right side Data */}
                <div>
                  <ul>
                    <li>
                      <span>Test Reg:</span> <p>{val.testreg}</p>
                    </li>
                    <li>
                      <span>Registered:</span> <p>{val.registered}</p>
                    </li>
                    <li>
                      <span>Reguntil:</span> <p>{val.reguntil}</p>
                    </li>
                    <li>
                      <span>Built:</span> <p>{val.built}</p>
                    </li>
                    <li>
                      <span>First Flight Date:</span>{" "}
                      <p>{val.firstflightdate}</p>
                    </li>
                    <li>
                      <span>Seat Configuration:</span>{" "}
                      <p>{val.seatconfiguration}</p>
                    </li>
                    <li>
                      <span>Engines:</span> <p>{val.engines}</p>
                    </li>
                    <li>
                      <span>Modes:</span> <p>{val.modes}</p>
                    </li>
                    <li>
                      <span>Adsb:</span> <p>{val.adsb}</p>
                    </li>
                    <li>
                      <span>Acars:</span> <p>{val.acars}</p>
                    </li>
                    <li>
                      <span>Notes:</span> <p>{val.notes}</p>
                    </li>
                    <li>
                      <span>Category Description:</span>{" "}
                      <p>{val.categorydescription}</p>
                    </li>
                    <li>
                      <span>Status:</span> <p>{val.status}</p>
                    </li>
                    <li>
                      <span>Matched:</span> <p>{val.matched}</p>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DataSearch;
