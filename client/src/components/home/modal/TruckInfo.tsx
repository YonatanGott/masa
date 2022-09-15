//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Stack, Paper, Text } from '@mantine/core';
import { ITruck } from '_types/Truck';

//Styling elements imports

//Typescript models & enums imports
interface TruckInfoProps {
    truck: ITruck
}
const TruckInfo: FunctionComponent<TruckInfoProps> = ({ truck }) => {
    const { classes } = useStyles();
    return (
        <Stack className={classes.container}>
            <Paper key={truck.id} withBorder shadow="md" radius="md" p="sm">
                <Text align='center' weight={500}>Truck: {truck.truckNumber} </Text>
            </Paper>

            <Text weight={500}>Known since: <Text span className={classes.textSpan}> {truck.epoch} </Text></Text>
            <Text weight={500}>Last read: <Text span className={classes.textSpan}>{truck.lastRead}</Text> </Text>
            <Text weight={500}>Last known location:
                <Text className={classes.textSpan}>
                    {` ${truck.latestLocation[0]} , ${truck.latestLocation[1]}`}
                </Text>
            </Text>
            <Text weight={500}>Miles traveled:<Text span className={classes.textSpan}>{truck.distanceTraveled.toFixed(2)}</Text>  </Text>
            <Text weight={500}>Engine temperature:<Text span className={classes.textSpan}>{truck.engineHeat}</Text>  </Text>
        </Stack>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    },
    textSpan: {
        color: theme.colors.violet[4],
        marginLeft: theme.spacing.sm
    }
}));

export default TruckInfo