import { useState, useEffect } from "react";
import config from '../config';

function Landing() {
    const [greeting, setGreeting] = useState(String);
    const [farewell, setFarewell] = useState(String);

    useEffect(() => {
        fetch(config.API_URL + '/greeting')
            .then((response) => response.text())
            .then((text) => setGreeting(
                JSON.parse(text)
            ))
            .catch((error) => {
                console.error(error);
                setGreeting("Error fetching data");
            });
    }, []);

    useEffect(() => {
        fetch(config.API_URL + '/farewell')
            .then((response) => response.text())
            .then((text) => setFarewell(
                JSON.parse(text)
            ))
            .catch((error) => {
                console.error(error);
                setGreeting("Error fetching data");
            });
    }, []);

    return (
        <div className="flex justify-center bg-gray-100 h-screen items-center">
            <div className="text-gray-800 text-center bg-gray-300 px-4 py-2 m-2">
                <h1 className="text-lg font-semibold">Greeting</h1>
                { greeting ? <pre>{ greeting }</pre> : 'Loading Greeting...' }
            </div>

            <div className="text-gray-800 text-center bg-gray-300 px-4 py-2 m-2">
                <h1 className="text-lg font-semibold">Farewell</h1>
                { farewell ? <pre>{ farewell }</pre> : 'Loading Farewell...' }
            </div>
        </div>
    );
}

export default Landing