import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Stack,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Select,
} from '@chakra-ui/react';
import DataFinder from '../api/DataFinder';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditModal = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();

    const toast = useToast();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [crop_name, setCrop_name] = useState('');
    const [quantity, setQuantity] = useState('');
    const [crop_status, setCrop_status] = useState('');

    useEffect(() => {
        const newCrop = async () => {
            try {
                const crop = await DataFinder.get(`api/crop/${id}`);
                setCrop_name(crop.data.response[0].crop_name);
                setQuantity(crop.data.response[0].quantity);
            } catch (error) {
                console.log("🚀 ~ file: RegisterCrop.jsx:52 ~ newCrop ~ error", error)
                toast({
                    title: '😖 Ha ocurrido un error al traer el cultivo!',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
        newCrop();
        // eslint-disable-next-line
    }, []);

    const updateCrop = async (e) => {
        try {
            await DataFinder.patch(`api/crop/update/${id}`, {
                crop_name,
                crop_status,
                quantity
            });
            toast({
                title: '🌴 Se actualizo el cultivo!',
                description: 'Ya puedes visualizar el cultivo actualizado en el mapa principal!',
                status: 'info',
                duration: 9000,
                isClosable: true,
            });
            navigate('/')
        } catch (error) {
            console.log("🚀 ~ file: EditModal.jsx:57 ~ updateCrop ~ error", error)
            toast({
                title: '😖 Ha ocurrido un error al actualizar el cultivo!',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Button onClick={onOpen} width={'fit-content'} colorScheme={'blue'}>Editar</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    as={'form'}
                    noValidate
                    onSubmit={handleSubmit(updateCrop)}
                >
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
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
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type={'submits'}>
                            Guardar
                        </Button>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditModal;