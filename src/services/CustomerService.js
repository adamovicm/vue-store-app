export default class CustomerService {
    customers = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.s@email.com',
            purchases: [0, 1, 2, 3]
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.d@email.com',
            purchases: [2, 4]
        },
        {
            id: 3,
            firstName: 'Pera',
            lastName: 'Peric',
            email: 'pp@email.com',
            purchases: [ 5, 6, 7, 1 ]
        }
    ];

    findCustomer(id) {
        return this.customers[id];
    }
}