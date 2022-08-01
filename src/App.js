import {useEffect, useState} from 'react';
import './App.css';
import Card from "./Component/Card"
import Header from './Component/header';

function App() {
    const [data,
        setData] = useState([])

    useEffect(() => {
        const getUsers = () => {
            fetch('http://localhost:3001/posts')
                .then(resp => resp.json())
                .then(data => setData(data))
        };

        getUsers(); // run it, run it

    }, []);

    return (
        <div>
            <Header/>
            <div>
                {data.map((props) => {
                    return <Card props={props} key={props.id}/>
                })}
            </div>
        </div>

    );
}

export default App;
