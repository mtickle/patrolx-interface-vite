import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
//import { confirm } from "../components/Confirmation";

//--- DATA
import { DataSingleEndpoint } from '../../components/data/data_single_endpoint';

//--- MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

//--- INCOMING RECORD ID
const recordId = new URLSearchParams(location.search).get("id");
//const params = new URLSearchParams(location.search);

function PageName() {
    return "Call Details"
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

function PageForm({ data }) {

    //--- CONFIG ITEMS -------------------------------------
    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const { register, formState: { errors } } = useForm();
    const location = useLocation();
    const [record, setRecord] = useState(null);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    //--- END - CONFIG ITEMS -------------------------------------


    //--- If there an id present, load that record in VIEW mode.
    // useEffect(() => {

    //   const hasValue = data._id !== null;
    //   const recordId = data._id



    //   setShowDeleteButton(hasValue);

    //   if (hasValue) {
    //     //let showDeleteButton = true;
    //     axios.get(`https://seahorse-app-izgzv.ondigitalocean.app/api/getCall/${recordId}`, config)
    //     //axios.get(`http://localhost:8080/api/getOneCall/${recordId}`, config)
    //       .then((response) => setRecord(response.data))
    //       .catch((error) => console.error(error));
    //   } else {

    //   }
    // }, [location.search]);



    //--- Every form needs these
    const handleCancel = () => {
        window.location.href = '/Calls';
    };

    const handleDelete = async () => {
        if (await confirm("Delete this item?")) {
            if (recordId) {
                axios.delete(`https://seahorse-app-izgzv.ondigitalocean.app/api/deleteLocation/${recordId}`, config)
                    .then(window.location.href = '/Table')
                    .catch((error) => console.error(error));
            }
        }
    };



    const handleSubmit = () => {

    };

    //--- And every form needs these/
    const onSubmit = (data) => {
        // if (record) {
        //   axios.put(`https://seahorse-app-izgzv.ondigitalocean.app/api/updateLocation/${record.id}`, data, config)
        //     .then(() => window.location.href = '/Table')
        //     .catch((error) => console.error(error));
        // } else {
        //   axios.post("https://seahorse-app-izgzv.ondigitalocean.app/api/postLocation", data, config)
        //     .then(() => window.location.href = '/Table')
        //     .catch((error) => console.error(error));
        // }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Record ID</Form.Label>
                    <Form.Control
                        defaultValue={data ? data._id : ""}
                    />
                </Form.Group>


                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Agency</Form.Label>
                    <Form.Control
                        readOnly={true}
                        defaultValue={data ? data.agency : ""}
                    />
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Call Date</Form.Label>
                    <Form.Control
                        defaultValue={data ? data.callDate : ""}
                    />
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Call Time</Form.Label>
                    <Form.Control
                        defaultValue={data ? data.callTime : ""}
                    />
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Incident Type</Form.Label>
                    <Form.Control
                        defaultValue={data ? data.incidentType : ""}
                    />
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        defaultValue={data ? data.location : ""}
                    />
                </Form.Group>


                <Form.Group className="mb-3">

                    {/* <Button className="btn btn-primary me-1" variant="primary" type="submit">Submit</Button> */}

                    {/* {showDeleteButton && (
            <Button className="btn btn-danger me-1" id="deleteButton" type="submit" onClick={handleDelete}>Delete</Button>
          )} */}

                    <button className="btn btn-secondary mr-1" type="submit" onClick={handleCancel}>Cancel</button>

                </Form.Group>
            </Form>
        </>

    )
}

function CallPage() {

    var getName = "getCall"
    var formData = DataSingleEndpoint(getName, recordId);

    console.log(formData)

    //--- Return the UI here
    return (
        <React.Fragment>
            <div className="container-xl">
                <h1 className="display-6"><PageName /></h1>
                <p></p>

                <div className="card">
                    <div className="card-header">
                        Maps
                    </div>
                    <div className="card-body">
                        {/* <PageMap data={formData} /> */}
                    </div>
                </div>
                <p></p>
                <div className="card">
                    <div className="card-header">
                        Call Record
                    </div>
                    <div className="card-body">
                        <PageForm data={formData} />
                    </div>
                </div>

                <p></p>

            </div>
        </React.Fragment>
    )
}

export default CallPage