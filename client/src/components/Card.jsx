import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
} from '@chakra-ui/react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import EditModal from './EditModal';

export default function Card({ crop }) {
    return (
        <>
            {
                crop && crop.map((c, key) => (
                    <Center py={6} key={key}>
                        <Box
                            maxW={'300px'}
                            rounded={'md'}
                            borderWidth={'1px'}
                            borderColor={'gray.300'}
                            p={6}
                            overflow={'hidden'}>
                            <Box
                                h={'210px'}
                                bg={'gray.100'}
                                mt={-6}
                                mx={-6}
                                mb={6}
                                pos={'relative'}>
                                <MapContainer center={[c.latitude, c.longitude]} zoom={8} scrollWheelZoom={false}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[c.latitude, c.longitude]}>
                                        <Popup>
                                            <Text>Nombre del cultivo: </Text><Text fontWeight={'bold'}>{c.crop_name}</Text>
                                            <Text>Estado del cultivo: </Text><Text fontWeight={'bold'} color={c.status === 1 ? 'green' : 'red'}>{c.type}</Text>
                                            <Text>Cantidad del cultivo: </Text><Text fontWeight={'bold'}>{c.quantity}</Text>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </Box>
                            <Stack>
                                <Heading
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    {c.crop_name}
                                </Heading>
                            </Stack>
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Stack direction={'column'} spacing={0}>
                                    <Text fontWeight={600} color={c.status === 1 ? 'green' : 'red'}>{c.type}</Text>
                                    <Text fontWeight={600} fontSize={'sm'} paddingBottom={'1.25rem'}>Volumen del cultivo: {c.quantity} palmas</Text>
                                    <EditModal id={c.crop_id} />
                                </Stack>
                            </Stack>
                        </Box>
                    </Center>
                ))
            }
        </>
    );
}