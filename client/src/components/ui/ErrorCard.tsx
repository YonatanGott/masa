//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Paper, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

//Styling elements imports

//Typescript models & enums imports
interface IErrorProps {
    text?: string
}
const ErrorCard: FunctionComponent<IErrorProps> = ({ text }) => {
    const { classes } = useStyles();

    return (
        <Paper withBorder shadow="md" radius="md" className={classes.container}>
            <Alert icon={<IconAlertCircle />} title="Something Went Wrong" color="red">
                {text && `${text}`}
            </Alert>
        </Paper>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
    }
}));

export default ErrorCard