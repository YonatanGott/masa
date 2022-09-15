//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { Center, createStyles, Paper, Loader } from '@mantine/core';

//Styling elements imports

//Typescript models & enums imports

const LoaderCard: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Paper withBorder shadow="md" radius="md" p="sm" className={classes.container}>
            <Center>
                <Loader variant="dots" />
            </Center>
        </Paper>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: 'white'
    }
}));

export default LoaderCard