import { OrderStatus } from '../models';

const LIST: OrderStatus[] = [
    {
        id: 0,
        title: 'Analyzing'
    },
    {
        id: 1,
        title: 'Validating'
    },
    {
        id: 2,
        title: 'Delivery'
    }
]

export default () => LIST;