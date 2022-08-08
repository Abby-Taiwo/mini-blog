import {useEffect, useState} from 'react';
import './App.css';
import Card from './Component/Card/card';
import Header from './Component/Header/header';

function App() {
    
    const [data,setData] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const resp = await fetch('http://localhost:3000/posts')
            const data = await resp.json()
            setData(data)
        };

        getUsers(); // run it, run it

    }, []);

    return (
        <div>
            <Header/>
             <div style={{backgroundColor: '#bee0eb',paddingBottom: '20px'}}>
             {data.map((props) => {
                return <Card props={props} key={props.id}/>
             })}
             </div>

        </div>

    );
}

export default App;
