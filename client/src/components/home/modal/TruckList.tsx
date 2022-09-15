//React elements and hooks imports
import { FunctionComponent } from 'react'
import { useAppDispatch } from '_hooks/storeHooks';

//Components imports
import { createStyles, Stack, ActionIcon, Group, Paper, Text, ScrollArea } from '@mantine/core';
import { ITruck } from '_types/Truck';
import { IconMapPin } from '@tabler/icons';
import { setMapCenter } from '_store/map/mapSlice';

//Styling elements imports

//Typescript models & enums imports
interface TruckListProps {
    trucks: ITruck[]
}
const TruckList: FunctionComponent<TruckListProps> = ({ trucks }) => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();

    return (
        <ScrollArea style={{ height: 320 }} scrollbarSize={6}>
            <Stack spacing="xs" className={classes.container}>
                {
                    trucks && trucks?.map((truck: ITruck) => (
                        <Paper key={truck.id} withBorder shadow="md" radius="md" p="sm">
                            <Group spacing="sm" position="apart">
                                <Text weight={500}>Truck: {truck.truckNumber} </Text>
                                <ActionIcon color="violet" variant="light" onClick={() => dispatch(setMapCenter(truck.latestLocation))}>
                                    <IconMapPin size={18} />
                                </ActionIcon>
                            </Group>
                        </Paper>
                    ))
                }
            </Stack>
        </ScrollArea>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default TruckList