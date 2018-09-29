export class Room {
    title: string;
    run_devices: string;
    total_devices: string;
    total_person: string;
}

export class Status {
    device_name: string;
    status: string;
}

export class RoomStatus {
    room: Room;
    device_status: Array<Status>;
}