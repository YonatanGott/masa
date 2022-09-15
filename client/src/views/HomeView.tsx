//React elements and hooks imports
import { FunctionComponent, useState } from 'react'

//Components imports
import { createStyles, Container } from '@mantine/core';
import MapCard from '_components/home/MapCard';
import MapModal from '_components/home/modal/MapModal';

//Styling elements imports

//Typescript models & enums imports

const HomeView: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Container p="xs">
            <MapCard  />
            <MapModal />
        </Container>
    )
}

const useStyles = createStyles((theme) => ({
}));

export default HomeView