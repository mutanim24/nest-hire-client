import { Button } from 'keep-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HouseCard from '../../../components/HouseCard/HouseCard';

const Home = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get('houses.json');
            setHouses(response.data); // Update the state with fetched data

        };

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-3 gap-10 mx-20'>
            {
                houses.map((house, index) => <HouseCard
                    key={index}
                    house={house}
                ></HouseCard>)
            }

            <Button size="md">Default</Button>
        </div>
    );
};

export default Home;
