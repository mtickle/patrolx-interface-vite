
import React from "react";
import axios from "axios";

export const AdsbDataEndPoint = (apiEndPoint, itemCount) => {

    // FX_API_KEY = "8aBTsqrZuPRWRbV6tnoDI4pZ6HA5570r"
    // FX_API_URL = "https://starfish-app-btyak.ondigitalocean.app/api/postFlight"
    // FX_SOURCE_URL = "http://192.168.86.58/tar1090/data/aircraft.json"


    const [Items, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '8aBTsqrZuPRWRbV6tnoDI4pZ6HA5570r'
        }
    };

    const client = axios.create({
        baseURL: "http://localhost:8080/api/" + apiEndPoint
       // baseURL: "https://starfish-app-btyak.ondigitalocean.app/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get('?limit=' + itemCount, config)
            .then((response) => {
                setItems(response.data);
            });
    }, []);

    return Items

}


