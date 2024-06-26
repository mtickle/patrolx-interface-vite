import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

//--- DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//-- TABLE
import DataTable from '../../components/layout/data_table';

//--- MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

//--- CHARTS
import { CallCountsByAgencyBarChart } from './call_counts_by_agency';
import { CallCountsByIncidentBarChart } from './call_counts_by_incident';
import { CallCountsByEmdCodeBarChart } from './call_counts_by_emd_code';
import { CallCountsByHourLineChart } from './call_counts_by_hour';

function PageName() {
  return "Calls"
}

function PageMap({ data }) {

  const mapRef = useRef();
  const zoom = 11;
  const containerStyle = {
    width: "100%",
    height: "400px"
  }
  const center = {
    lat: 35.8158871065979,
    lng: -78.65528542793695
  }

  return (
    <>
      <MapContainer
        style={containerStyle}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((item, index) => {
          let position = {
            lat: Number(item.latitude.trim()),
            lng: Number(item.longitude.trim())
          };

          return <Marker key={index} position={position}>
            <Popup>
              {item.callDate} at {item.callTime}<br />
              {item.agency}<br />
              {item.incidentType}<br />
              {item.location}<br />
            </Popup>
          </Marker>
        })}

      </MapContainer>
    </>
  )
}

function PageCharts() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <CallCountsByAgencyBarChart />
          </div>
          <div className="col-md">
            <CallCountsByIncidentBarChart />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <CallCountsByEmdCodeBarChart />
          </div>
          <div className="col-md">
            <CallCountsByHourLineChart /> 
          </div>
        </div>
      </div>
    </>
  )
}

function PageTable({ columns, data }) {
  return DataTable(columns, data)
}

function TableColumns() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'callDate',
      },
      {
        Header: 'Time',
        accessor: 'callTime',
      },
      {
        Header: 'Responding Agency',
        accessor: 'agency',
      },
      {
        Header: 'Incident',
        accessor: 'incidentType',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: "",
        id: "",
        accessor: "_id",
          Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{ 
            pathname: `/call`,
            search:  `?id=${row.original._id}`,
          }}>View</Link>)            
      }
    ],
    []
  )
  return columns
}

export default function CallsPage() {

  var getAllName = "getAllCalls"
  var tableColumns = TableColumns();
  var tableData = DataEndpoint(getAllName, 100);
  var mapData = DataEndpoint(getAllName, 20);

  return (
    <div className="container-xl">
      <h1 className="display-6"><PageName /></h1>

      <p></p>
      <div className="card">
        <div className="card-header">
          Charts
        </div>
        <div className="card-body">
          <PageCharts />
        </div>
      </div>
      <p></p>

      <div className="card">
        <div className="card-header">
          Maps
        </div>
        <div className="card-body">
          <PageMap data={mapData} />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          Data
        </div>
        <div className="card-body">
          <PageTable columns={tableColumns} data={tableData} />
        </div>
      </div>
    </div>


  )
}


