import {
    Spinner,
    Flex
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DataFinder from '../api/DataFinder';
import Card from '../components/Card';

export default function AllCrops() {
    const [crop, setCrop] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allCrops = await DataFinder.get('api/crop/all');
                setCrop(allCrops.data.response);
                setLoad(false);
            } catch (error) {
                console.log("🚀 ~ file: AllCrops.jsx:20 ~ fetchData ~ error", error)
            }
        }
        fetchData();
    }, [])


    return (
        <>
            {
                load ? (
                    <Spinner />
                ) : (
                    <Flex wrap={'wrap'} gap={'15'} justifyContent={'center'} alignItems={'center'}>
                        <Card crop={crop} />
                    </Flex>
                )
            }
        </>
    );
}