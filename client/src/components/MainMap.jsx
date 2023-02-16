import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import styled from 'styled-components';
import DataFinder from '../api/DataFinder';

const MainMap = () => {
    const position = [4.104962, -77.363398];
    const [crop, setCrop] = useState([]);

    useEffect(() => {
        const cropFetch = async () => {
            try {
                const crop = await DataFinder.get('/api/crop/all');
                setCrop(crop.data.response);
            } catch (error) {
                console.log("🚀 ~ file: MainMap.jsx:16 ~ cropFetch ~ error", error)
            }
        }
        cropFetch();
    }, [])

    return (
        <Container>
            <Text fontSize={'sm'} color={'gray.400'} fontWeight={'semibold'}>Mapa de los cultivos de Cocos en el pacifico Colombiano 🥥🇨🇴</Text>
            <MapContainer center={position} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    crop && crop.map((c, key) => (
                        <Marker position={[c.latitude, c.longitude]} key={key}>
                            <Popup>
                                <Text>Nombre del cultivo: </Text><Text fontWeight={'bold'}>{c.crop_name}</Text>
                                <Text>Estado del cultivo: </Text><Text fontWeight={'bold'} color={c.status === 1 ? 'green' : 'red'}>{c.type}</Text>
                                <Text>Cantidad del cultivo: </Text><Text fontWeight={'bold'}>{c.quantity}</Text>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    margin: 0;
    padding-top: 3.75rem;
    height: calc(90vh - 5rem);
`;

export default MainMap;