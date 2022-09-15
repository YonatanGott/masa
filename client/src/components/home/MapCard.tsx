//React elements and hooks imports
import { FunctionComponent, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { useAppSelector, useAppDispatch } from '_hooks/storeHooks';

//Components imports
import { createStyles, Card, Text, Badge, Button, Group, Popover } from '@mantine/core';
import { Map, Marker } from "pigeon-maps"
import { osm, stamenToner } from 'pigeon-maps/providers'
import { IconMapPin } from '@tabler/icons';
import TooltipCard from './TooltipCard';
import { useGetTrucksQuery } from '_api/trucks.api';

//Styling elements imports

//Typescript models & enums imports
import { openTruckInfoModal, openTruckListModal, selectMap } from '_store/map/mapSlice';
import { ITruck } from '_types/Truck';
import LoaderCard from '_components/ui/LoaderCard';
import ErrorCard from '_components/ui/ErrorCard';
interface MapCardProps {
}

const MapCard: FunctionComponent<MapCardProps> = () => {
    const { classes } = useStyles();
    const { mapCenter } = useAppSelector(selectMap);
    const dispatch = useAppDispatch();
    const [truck, setTruck] = useState<ITruck>()
    const [opened, { close, open }] = useDisclosure(false);
    const { data: trucks, isSuccess, isLoading, isError } = useGetTrucksQuery(null, {
        pollingInterval: 5000,
    })
    let timer: NodeJS.Timeout
    const handleMouseOver = (truck: ITruck) => {
        setTruck(truck)
        open()
        clearTimeout(timer);
    }
    const handleMouseOut = () => {
        timer = setTimeout(() => {
            close()
        }, 4000);
    }

    let content;
    if (isLoading) {
        content = <LoaderCard />
    } else if (isSuccess) {
        content = <Card.Section>
            {
                trucks &&
                <Map height={500} provider={osm}
                    defaultCenter={trucks[0].latestLocation}
                    defaultZoom={10}
                    center={mapCenter}>
                    {
                        trucks?.map((truck: ITruck) => (
                            <Marker key={truck.id} payload={truck}
                                onMouseOver={({ event, anchor, payload }) => { handleMouseOver(payload) }}
                                onClick={({ event, anchor, payload }) => { dispatch(openTruckInfoModal(payload)) }}
                                onMouseOut={handleMouseOut}
                                color='indigo'
                                width={50}
                                anchor={truck.latestLocation} />
                        ))
                    }
                </Map>
            }
        </Card.Section>
    } else if (isError) {
        content = <ErrorCard />
    }

    return (
        <Popover position="right-start" opened={opened} exitTransitionDuration={50000}>
            <Popover.Target>
                <Card shadow="sm" p="lg" radius="md" >
                    {content}
                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Masa Truck Tracker</Text>
                        <Badge color="violet.3" variant="light">
                            Tracking {trucks?.length}
                        </Badge>
                    </Group>
                    <Text size="sm" color="dimmed">
                        Each marker on the map shows the truck's latest known location 
                    </Text>
                    {
                        trucks &&
                        <Button leftIcon={<IconMapPin />} variant="light" mt="md" radius="md" onClick={() => dispatch(openTruckListModal(trucks))}>
                            Show Available Trucks
                        </Button>
                    }
                </Card>
            </Popover.Target>
            <Popover.Dropdown >
                {truck && <TooltipCard handleTruckInfo={() => dispatch(openTruckInfoModal(truck))} truck={truck} />}
            </Popover.Dropdown>
        </Popover>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default MapCard