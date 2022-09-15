//React elements and hooks imports
import { FunctionComponent } from 'react'
import { useAppSelector, useAppDispatch } from '_hooks/storeHooks';

//Components imports
import { createStyles, Modal, Title } from '@mantine/core';
import TruckList from './TruckList';
import TruckInfo from './TruckInfo';

//Styling elements imports

//Typescript models & enums imports
import { selectMap, setModal } from '_store/map/mapSlice';
interface MapModalProps {
}
const MapModal: FunctionComponent<MapModalProps> = () => {
    const { classes } = useStyles();
    const { modalTitle, openModal, modalContent } = useAppSelector(selectMap);
    const dispatch = useAppDispatch();

    return (
        <Modal
            opened={openModal}
            onClose={() => dispatch(setModal(false))}
            title={<Title color="violet.4" order={4}>{modalTitle}</Title>}
            transition="fade"
            transitionDuration={600}
            transitionTimingFunction="ease"
        >
            {
                modalTitle === 'Tracking Trucks' && <TruckList trucks={modalContent} />
            }
            {
                modalTitle === 'Truck Info' && <TruckInfo truck={modalContent} />
            }
        </Modal>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    }
}));

export default MapModal