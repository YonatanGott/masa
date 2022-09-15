//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Header, Group, Title } from '@mantine/core';
import { IconTruckDelivery } from '@tabler/icons';
//Styling elements imports

//Typescript models & enums imports

const AppHeader: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Header height={60} p="xs">
            <Group spacing="xs">
                <IconTruckDelivery size={36} color="white" />
                <Title color="violet.4" order={1}>Masa</Title>
            </Group>
        </Header>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default AppHeader