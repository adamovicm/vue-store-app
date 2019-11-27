export default class CustomerService {
    customers = [
        {
            id: 0,
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.s@email.com',
            purchases: [
                'Bread',
                'Milk',
                'Coke'
            ]
        },
        {
            id: 1,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.d@email.com',
            purchases: [
                'Meat',
                'OJ'
            ]
        },
        {
            id: 2,
            firstName: 'Pera',
            lastName: 'Peric',
            email: 'pp@email.com',
            purchases: [
                'Cereal',
                'Apples',
                'Bananas',
                'Mango'
            ]
        }
    ];

    findCustomer(id) {
        let foundCustomer = this.customers.find(customer => customer.id == id);
        return foundCustomer;
    }
}