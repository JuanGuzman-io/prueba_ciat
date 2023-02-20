import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Select,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMapEvents } from 'react-leaflet';
import DataFinder from '../api/DataFinder';
import { useForm } from 'react-hook-form';

export default function RegisterCrop() {
    const init = [4.104962, -77.363398];
    const toast = useToast();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [crop_name, setCrop_name] = useState('');
    const [quantity, setQuantity] = useState('');
    const [crop_status, setCrop_status] = useState('');

    const [selectedPosition, setSelectedPosition] = useState([0, 0]);

    const Markers = () => {
        useMapEvents({
            click(e) {
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);
            },
        })

        return (
            selectedPosition ?
                <Marker
                    key={selectedPosition[0]}
                    position={selectedPosition}
                    interactive={false}
                >
                    <Popup>{selectedPosition[0]}, {selectedPosition[1]}</Popup>
                </Marker>
                : null
        )

    }

    const newCrop = async () => {
        try {
            await DataFinder.post('api/crop/new', {
                crop_name,
                quantity,
                crop_status,
                latitude: selectedPosition[0],
                longitude: selectedPosition[1]
            });
            toast({
                title: '🌴 Se ha creado el cultivo!',
                description: 'Se creo correctamente el cultivo y el estado en que se encuentra, recuerda que puedes cambiar el estado en la sección de editar.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            setCrop_name('');
            setQuantity('');
            setCrop_status('');
        } catch (error) {
            console.log("🚀 ~ file: RegisterCrop.jsx:52 ~ newCrop ~ error", error)
            toast({
                title: '😖 Ha ocurrido un error al crear cultivo!',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <Flex
            minH={'calc(100vh - 4rem)'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} width={'600px'} maxW={'container.lg'} py={12} px={6}>
                <Stack align={'center'} h={'300px'}>
                    <Text fontSize={'lg'} fontWeight={'semibold'}>Selecciona la ubicación del cultivo.</Text>
                    <MapContainer
                        center={init || selectedPosition}
                        zoom={9}
                    >
                        <Markers />
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    as={'form'}
                    noValidate
                    onSubmit={handleSubmit(newCrop)}
                >
                    <Stack spacing={4}>
                        <Box>
                            <FormControl id="crop_name" isRequired>
                                <FormLabel>Nombre del cultivo</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Las palmas'
                                    name='crop_name'
                                    id='crop_name'
                                    {...register('crop_name', { required: { value: true, message: 'El nombre es obligatorio' }, minLength: { value: 2, message: 'El nombre es muy corto' } })}
                                    value={crop_name}
                                    onChange={e => setCrop_name(e.target.value)}
                                />
                                {errors.crop_name && <Text fontSize={'xs'} color={'red'}>{errors.crop_name.message}</Text>}
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="quantity" isRequired>
                                <FormLabel>Cantidad del cultivo</FormLabel>
                                <Input
                                    type='number'
                                    placeholder='Cantidad de palmas'
                                    name='quantity'
                                    id='quantity'
                                    {...register('quantity', { required: { value: true, message: 'La cantidad es obligatoria' } })}
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                />
                                {errors.quantity && <Text fontSize={'xs'} color={'red'}>{errors.quantity.message}</Text>}
                            </FormControl>
                        </Box>
                        <FormControl id="crop_status" isRequired>
                            <FormLabel>Estado del cultivo</FormLabel>
                            <Select
                                type='text'
                                placeholder='-- Seleccione --'
                                name='crop_status'
                                id='crop_status'
                                {...register('crop_status', { required: { value: true, message: 'El estado es obligatorio' } })}
                                value={crop_status}
                                onChange={e => setCrop_status(e.target.value)}
                            >
                                <option value={'1'}>No afectada</option>
                                <option value={'2'}>Escama roja</option>
                                <option value={'3'}>Gualpa</option>
                            </Select>
                            {errors.crop_status && <Text fontSize={'xs'} color={'red'}>{errors.crop_status.message}</Text>}
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                type={'submit'}
                            >
                                Registrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}