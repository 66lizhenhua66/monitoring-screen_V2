import { RoomStatus } from './room';


export const All_Rooms: Array<RoomStatus> = [
    {
        room: {title: "动力中心", run_devices: "8", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '台架-1#', status: '停止'},
            {device_name: '台架-2#', status: '运行'},
            {device_name: '台架-3#', status: '运行'},
            {device_name: '台架-4#', status: '运行'},
            {device_name: '台架-5#', status: '停止'},
            {device_name: '台架-6#', status: '停止'},
            {device_name: '台架-7#', status: '运行'},
            {device_name: '台架-8#', status: '运行'},
            {device_name: '台架-9#', status: '停止'},
            {device_name: '台架-10#', status: '停止'},
            {device_name: '台架-11#', status: '停止'},
            // {device_name: '台架-12#', status: '运行'},
            {device_name: '台架-13#', status: '运行'},
            {device_name: '台架-14#', status: '停止'},
            {device_name: '台架-15#', status: '停止'},
            {device_name: '台架-16#', status: '停止'},
            {device_name: '台架-17#', status: '运行'},
            {device_name: '台架-18#', status: '运行'},
            {device_name: '台架-19#', status: '停止'},
            {device_name: '台架-20#', status: '停止'},
            {device_name: '同步器-1#', status: '停止'},
            {device_name: '同步器-2#', status: '停止'},
            {device_name: ' 变速器耐久', status: '停止'},
        ]
    },
    {
        room: {title: "新能源", run_devices: "4", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: '台架-5#', status: '运行'},
            {device_name: '台架-6#', status: '停止'},
            {device_name: 'AVL-1#', status: '停止'},
            {device_name: 'AVL-2#', status: '运行'},
            {device_name: 'AVL-3#', status: '运行'},
            {device_name: 'AVL-4#', status: '运行'},

        ]
    },
    {
        room: {title: "试验认证", run_devices: "2", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: 'AVL-1#', status: '停止'},
            {device_name: 'AVL-2#', status: '运行'},
            {device_name: 'AVL-3#', status: '运行'},

        ]
    },
    {
        room: {title: "NVH", run_devices: "3", total_devices: "35", total_person: "45"},
        device_status: [
            {device_name: 'AVL-8#', status: '停止'},
            {device_name: 'AVL-9#', status: '运行'},
            {device_name: 'AVL-10#', status: '停止'},
            {device_name: 'hofmann-1#', status: '运行'},
            {device_name: 'hofmann-2#', status: '运行'},
            {device_name: 'hofmann-3#', status: '停止'},
        ]
    },

];
