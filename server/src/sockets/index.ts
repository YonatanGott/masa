import WebSocket from 'ws'
import moment from "moment";
import { IEvent } from '../types/Event';
import { addEvent } from '../functions/addEvent';

export const initSockets = () => {
	try {
		const socketsUrl = process.env.SOCKETS_URL || "localhost"
		const ws = new WebSocket(`ws://${socketsUrl}:8080`)
		ws.binaryType = "arraybuffer";

		ws.on('open', function open() {
			console.log('Connected to WebSocketServer');
			ws.send("START");
		});

		ws.addEventListener("message", async (event) => {
			if (event.data instanceof ArrayBuffer) {
				const message: IEvent = {
					truckId: new DataView(event.data, 0).getUint32(0),
					numOfMessages: new DataView(event.data, 4).getUint8(0),
					engineHeat: new DataView(event.data, 5).getUint16(0),
					latitude: new DataView(event.data, 7).getFloat32(0),
					longitude: new DataView(event.data, 11).getFloat32(0),
					epoch: moment.unix(new DataView(event.data, 15).getUint32(0)).format("DD/MM/YYYY hh:mm:ss"),
					malfunctionWarning: new DataView(event.data, 19).getUint8(0),
				}
				await addEvent(message)
			}
		});

		ws.on('error', error => {
			console.log(error)
		})

		ws.on('close', () => {
			console.log('WebSocketServer closed connection')
		})
	} catch (error) {
		console.log(`Can't connect to WebSocketServer : ${error}`)
	}

};
