import { RoomStatus } from './room';


export const All_Rooms: Array<RoomStatus> = [
    {
        room: {title: "动力中心", run_devices: "12", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '台架-1#', status: '运行'},
            {device_name: '台架-2#', status: '运行'},
            {device_name: '台架-3#', status: '运行'},
            {device_name: '台架-4#', status: '运行'},
            {device_name: '台架-5#', status: '运行'},
            {device_name: '台架-6#', status: '运行'},
            {device_name: 'AVL-1#', status: '运行'},
            {device_name: 'AVL-2#', status: '运行'},
            {device_name: 'AVL-3#', status: '运行'},
            {device_name: 'AVL-4#', status: '运行'},
            {device_name: 'AVL-5#', status: '运行'},
            {device_name: 'AVL-6#', status: '运行'},
            {device_name: 'AVL-7#', status: '运行'},
            {device_name: 'AVL-8#', status: '停止'},
            {device_name: 'AVL-9#', status: '运行'},
            {device_name: 'AVL-10#', status: '停止'},
            {device_name: 'hofmann-1#', status: '运行'},
            {device_name: 'hofmann-2#', status: '运行'},
            {device_name: 'hofmann-3#', status: '停止'},
            {device_name: 'hofmann-4#', status: '停止'},
        ]
    },
    {
        room: {title: "新能源", run_devices: "28", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '1', status: '运行'},
            {device_name: '2', status: '运行'},
            {device_name: '3', status: '运行'},
            {device_name: '4', status: '运行'},
        ]
    },
    {
        room: {title: "试验认证", run_devices: "28", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '1', status: '运行'},
            {device_name: '2', status: '运行'},
            {device_name: '3', status: '运行'},
            {device_name: '4', status: '运行'},
        ]
    },
    {
        room: {title: "NVH", run_devices: "28", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '1', status: '运行'},
            {device_name: '2', status: '运行'},
            {device_name: '3', status: '运行'},
            {device_name: '4', status: '运行'},
        ]
    },

];
