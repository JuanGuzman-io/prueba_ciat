import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Container maxW={'container.xl'}>
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;