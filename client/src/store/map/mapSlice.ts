import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "_store/store";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITruck } from "_types/Truck";

interface IInitialState {
    modalContent: ITruck | ITruck[] | any;
    openModal: boolean;
    modalTitle: string;
    mapCenter: [number, number] | undefined;
}
const initialState: IInitialState = {
    modalContent: null,
    openModal: false,
    modalTitle: '',
    mapCenter: undefined
};

export const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            state.openModal = action.payload
        },
        setMapCenter: (state, action: PayloadAction<[number, number]>) => {
            state.mapCenter = action.payload
        },
        setModalTitle: (state, action: PayloadAction<string>) => {
            state.modalTitle = action.payload
        },
        setModalContent: (state, action: PayloadAction<ITruck | ITruck[] | any>) => {
            state.modalContent = action.payload
        },
        openTruckListModal: (state, action: PayloadAction<ITruck[]>) => {
            state.modalContent = action.payload
            state.modalTitle = 'Tracking Trucks'
            state.openModal = true
        },
        openTruckInfoModal: (state, action: PayloadAction<ITruck>) => {
            state.modalContent = action.payload,
                state.modalTitle = 'Truck Info'
            state.openModal = true
        },
    },
})
export const {
    setModal,
    setMapCenter,
    setModalContent,
    setModalTitle,
    openTruckListModal,
    openTruckInfoModal
} = mapSlice.actions;
export const selectMap = (state: RootState) => state.map;
export default mapSlice.reducer;
