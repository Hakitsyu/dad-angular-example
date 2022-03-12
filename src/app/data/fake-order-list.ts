import { Order } from '../models';

const generateRandomId = () => Math.floor(Math.random() * 999999);

const LIST: Order[] = [
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 0
    },
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 0
    },
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 1
    },
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 2
    },
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 2
    },
    {
        id: generateRandomId(),
        date: '12/03/2022',
        status: 2
    },
]

export default () => LIST;