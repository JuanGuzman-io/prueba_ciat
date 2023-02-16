import MainMap from '../components/MainMap';
import { Button, Heading, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const Home = () => {

    return (
        <SimpleGrid spacing={10} columns={{ base: 2, md: 2 }}>
            <MainMap />
            <VStack paddingTop={'3.75rem'}>
                <Heading textAlign={'left'}>El sector cocotero en Colombia</Heading>
                <Text fontSize={'lg'} paddingTop={'1.875rem'}>El sector cocotero del pacifico Colombiano cuenta con un problema de plagas que están atacando directamente las palmas de coco y están deteriorando los cultivos afectando a cientos de familias que se benefician de la producción del coco.</Text>
                <Text fontSize={'lg'}>El Gobierno de Colombia <Link color={'blue.400'} fontWeight={'bold'}>MinAmbiente</Link> en alianza con el <Link color={'green.400'} fontWeight={'bold'}>CIAT</Link> ha diseñado un programa para erradicar las plagas del cultivo del coco y para esto se ha desarrollado el programa de <Link fontWeight={'bold'}>CocoHealth 🥥</Link>, un aplicativo para identificar los sectores cocoteros y el estado de los cultivos.</Text>
                <Text fontSize={'lg'}>Puedes aportar a la comunidad registrando o actualizando el estado de los cultivos de coco.</Text>
                <HStack marginTop={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={'1.875rem'}>
                    <Button colorScheme={'green'} as={Link} href={'/register-crop'}>Registrar cultivo</Button>
                    <Button colorScheme={'blue'} as={Link} href={'/all-crops'}>Ver todos los cultivo</Button>
                </HStack>
            </VStack>
        </SimpleGrid>
    );
}

export default Home;