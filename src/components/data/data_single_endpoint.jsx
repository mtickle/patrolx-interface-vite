
import React from "react";
import axios from "axios";

export const DataSingleEndpoint = (apiEndPoint, recordId) => {

    const [Item, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
        baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get(recordId, config)

            .then((response) => {
                setItems(response.data);
            });
    }, []);

    return Item

}


