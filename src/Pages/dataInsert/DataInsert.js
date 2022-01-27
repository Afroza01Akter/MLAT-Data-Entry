import React from "react";
import "./DataInsert.css";

const DataInsert = () => {
  return (
    <div>
      <div className="datainsert">
        <div className="datainsert__main-form">
          
                <h2>Enter Data Info</h2>
            <form>
            <div className="datainsert__main-form--form-left">
              <input type="text" placeholder="Enter icao24" />
              <br />
              <input type="code" placeholder="Enter registration code" />
              <br />
              <input type="text" placeholder="Enter manufacturer icao" />
              <br />
              <input type="name" placeholder="Enter manufacturer name" />
              <br />
              <input type="text" placeholder="Enter model" />
              <br />
              <input type="text" placeholder="Enter typecode" />
              <br />
              <input type="code" placeholder="Enter serial number" />
              <br />
              <input type="code" placeholder="Enter line number" />
              <br />
              <input type="text" placeholder="Enter icao aircraft type" />
              <br />
              <input type="text" placeholder="Enter operator" />
              <br />
              <input type="text" placeholder="Enter operator callsign" />
              <br />
              <input type="text" placeholder="Enter operator icao" />
              <br />
              <input type="text" placeholder="Enter operator iata" />
              <br />
              <input type="text" placeholder="Enter owner" />
              <br />
              </div>


              <div className="datainsert__main-form--form-right">
              <input type="text" placeholder="Enter test reg" />
              <br />
              <input type="text" placeholder="Enter registered" />
              <br />
              <input type="text" placeholder="Enter reguntil" />
              <br />
              <select type="select">
                <option>--</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <br />
              <input type="text" placeholder="Enter built" />
              <br />
              <input type="text" placeholder="Enter first flight date" />
              <br />
              <input type="text" placeholder="Enter seat configuration" />
              <br />
              <input type="text" placeholder="Enter engines" />
              <br />
              <select type="select">
                <option>--</option>
                <option>True</option>
                <option>False</option>
              </select>
              <br />
              <select type="select">
                <option>--</option>
                <option>True</option>
                <option>False</option>
              </select>
              <br />
              <select type="select">
                <option>--</option>
                <option>True</option>
                <option>False</option>
              </select>
              <br />
              <textarea type="text" placeholder="Enter notes" />
              <br />
              <textarea type="text" placeholder="Enter category Description" />
              <br />
              </div>
              <br />

              
            </form>
            <div className="datainsert__main-form__button">
            <button type="submit">Submit</button>
            </div>
            
          </div>
        </div>
      </div>
   
    
  );
};

export default DataInsert;
