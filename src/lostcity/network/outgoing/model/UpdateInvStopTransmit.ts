import OutgoingMessage from '#lostcity/network/outgoing/OutgoingMessage.js';
import ServerProtPriority from '#lostcity/network/outgoing/prot/ServerProtPriority.js';

export default class UpdateInvStopTransmit extends OutgoingMessage {
    priority = ServerProtPriority.IMMEDIATE;

    constructor(readonly component: number) {
        super();
    }
}