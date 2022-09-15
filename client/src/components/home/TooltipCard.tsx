//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Card, Text, Button, Center } from '@mantine/core';
import { IconTruckDelivery } from '@tabler/icons';

//Styling elements imports

//Typescript models & enums imports
import { ITruck } from '_types/Truck';
interface TooltipCardProps {
    handleTruckInfo: (truck: ITruck) => void;
    truck: ITruck;
}
const TooltipCard: FunctionComponent<TooltipCardProps> = ({ handleTruckInfo, truck }) => {
    const { classes } = useStyles();

    return (
        <Card shadow="sm" p="lg" radius="md">
            <Card.Section>
                <Center>
                    <IconTruckDelivery />
                </Center>
            </Card.Section>
            <Text weight={500}>Truck: {truck.truckNumber} </Text>
            <Text size="sm" color="dimmed">
                Miles traveled: {truck.distanceTraveled.toFixed(2)}
            </Text>
            <Text size="sm" color="dimmed">
                Engine state: {truck.malfunctionWarning ? "malfunction" : "no malfunction"}
            </Text>
            <Button variant="light" fullWidth mt="md" radius="md" onClick={() => handleTruckInfo(truck)}>
                Truck Info
            </Button>
        </Card>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default TooltipCard