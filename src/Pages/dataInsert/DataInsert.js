import React, { useState } from "react";
import "./DataInsert.css";
import table from "../dashboard/component/data/tabledata.json";

const DataInsert = () => {
  const [posts, setPosts] = useState(table);
  const [addFormData, setAddFormData] = useState({
    icao24: "",
    registration: "",
    manufacturericao: "",
    manufacturername: "",
    model: "",
    typecode: "",
    serialnumber: "",
    linenumber: "",
    icaoaircrafttype: "",
    operator: "",
    operatorcallsign: "",
    operatoricao: "",
    operatoriata: "",
    owner: "",
    testreg: "",
    registered: "",
    reguntil: "",
    built: "",
    firstflightdate: "",
    seatconfiguration: "",
    modes: "",
    adsb: "",
    acars: "",
    notes: "",
    categorydescription: "",
    status: "",
    matched: "",
  });

  //For Input Change
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  //for form submitting
  let fileHandle;
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    
    // console.log(text);
    const newData = {
      icao24: addFormData.icao24,
      registration: addFormData.registration,
      manufacturericao: addFormData.manufacturericao,
      manufacturername: addFormData.manufacturername,
      model: addFormData.model,
      typecode: addFormData.typecode,
      serialnumber: addFormData.serialnumber,
      linenumber: addFormData.linenumber,
      icaoaircrafttype: addFormData.icaoaircrafttype,
      operator: addFormData.operator,
      operatorcallsign: addFormData.operatorcallsign,
      operatoricao: addFormData.operatoricao,
      operatoriata: addFormData.operatoriata,
      owner: addFormData.owner,
      testreg: addFormData.testreg,
      registered: addFormData.registered,
      reguntil: addFormData.reguntil,
      built: addFormData.built,
      firstflightdate: addFormData.firstflightdate,
      seatconfiguration: addFormData.seatconfiguration,
      engines: addFormData.engines,
      modes: addFormData.modes,
      adsb: addFormData.adsb,
      acars: addFormData.acars,
      notes: addFormData.notes,
      categorydescription: addFormData.categorydescription,
      status: addFormData.status,
      matched: addFormData.matched,
    };

    const newDatas = [...posts, newData];
    console.log(newDatas);

    //for saving data to json file

    [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    newDatas.innerText = text;
    let stream = await fileHandle.createWritable();
    await stream.write(newDatas.innerText);
    await stream.close();

    setPosts(newDatas);
    alert("data inserted");
  };

  return (
    <div>
      <div className="datainsert">
        <div className="datainsert__main-form">
          <h2>Enter Data Info</h2>
          <form onSubmit={handleAddFormSubmit}>
            <div className="datainsert__main-form--form-left">
              <input
                type="text"
                name="icao24"
                placeholder="Enter icao24"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="code"
                name="registration"
                placeholder="Enter registration code"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="manufacturericao"
                placeholder="Enter manufacturer icao"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="name"
                name="manufacturername"
                placeholder="Enter manufacturer name"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="model"
                placeholder="Enter model"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="typecode"
                placeholder="Enter typecode"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="code"
                name="serialnumber"
                placeholder="Enter serial number"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="code"
                name="linenumber"
                placeholder="Enter line number"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="icaoaircrafttype"
                placeholder="Enter icao aircraft type"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="operator"
                placeholder="Enter operator"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="operatorcallsign"
                placeholder="Enter operator callsign"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="operatoricao"
                placeholder="Enter operator icao"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="operatoriata"
                placeholder="Enter operator iata"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="owner"
                placeholder="Enter owner"
                onChange={handleAddFormChange}
              />
              <br />
            </div>

            <div className="datainsert__main-form--form-right">
              <input
                type="text"
                name="testreg"
                placeholder="Enter test reg"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="registered"
                placeholder="Enter registered"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="reguntil"
                placeholder="Enter reguntil"
                onChange={handleAddFormChange}
              />
              <br />

              <select type="select">
                <option>--</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>

              <br />
              <input
                type="text"
                name="built"
                placeholder="Enter built"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="firstflightdate"
                placeholder="Enter first flight date"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="seatconfiguration"
                placeholder="Enter seat configuration"
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="engines"
                placeholder="Enter engines"
                onChange={handleAddFormChange}
              />
              <br />
              <select name="modes" type="select">
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

            <div className="datainsert__main-form__button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataInsert;
