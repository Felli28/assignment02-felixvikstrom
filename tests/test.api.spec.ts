import { test, expect } from '@playwright/test';

test.describe('Car rental test suite', () => {

    test('1. Get all orders', async ({ request }) => {
        const response = await request.get('http://localhost:9090/api/v1/orders');
        expect(response.status()).toBe(200);
    });
    

    
    test('2. Add a car', async ({ request }) => {
        const newCarPayload = {
            pricePerDay: 700.0,
            fabric: "Fabric8",
            model: "Model7",
            registrationNumber: "REG128",
            isBooked: false
        };

        const addCarResponse = await request.post('http://localhost:9090/api/v1/addcar', {
            data: JSON.stringify(newCarPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(addCarResponse.status()).toBe(201);
        console.log(await addCarResponse.json());
    });

    
    test('3. Update car information', async ({ request }) => {
        const updateCarPayload = {
            id: 3,
            pricePerDay: 900.0,
            fabric: "Updated Fabric",
            model: "Updated Model9",
            registrationNumber: "REG001",
            isBooked: false
        };

        const updateCarResponse = await request.put('http://localhost:9090/api/v1/updatecar', {
            data: JSON.stringify(updateCarPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(updateCarResponse.status()).toBe(200);
        console.log(await updateCarResponse.json());
    });

    
    test('4. Update customer', async ({ request }) => {
        const newPayload = {
            id: 1,
            username: "tjuu",
            name: "Adam jalla",
            address: "Jallavägen 6",
            email: "adam.jalla@hotmail.com",
            phoneNumber: "07038484832"
        };

        const updateCustomerResponse = await request.put('http://localhost:9090/api/v1/updatecustomer', {
            data: JSON.stringify(newPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(updateCustomerResponse.status()).toBe(200);
        console.log(await updateCustomerResponse.json());
    });

    
    test('5. Add a new customer', async ({ request }) => {
        const newCustomerPayload = {
            username: "newuser1",
            name: "New User",
            address: "123 Main St",
            email: "newuser1@example.com",
            phoneNumber: "0700000001"
        };
    
        const addCustomerResponse = await request.post('http://localhost:9090/api/v1/addcustomer', {
            data: JSON.stringify(newCustomerPayload),
            headers: { 'Content-Type': 'application/json' }
        });
    
        expect(addCustomerResponse.status()).toBe(201);
    });
    

    
    

    test('6. Create a car booking', async ({ request }) => {
        const newBookingPayload = {
            userId: 1,
            carId: 1,
            date: "2024-10-08T17:22:23.369Z",
            numberOfDays: 5
        };
    
        const createBookingResponse = await request.post('http://localhost:9090/api/v1/ordercar', {
            data: JSON.stringify(newBookingPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        expect(createBookingResponse.status()).toBe(200);
    });
    

    
    test('7. Delete a car', async ({ request }) => {
        const carToDeleteID = 4;
    
        const deleteCarResponse = await request.delete('http://localhost:9090/api/v1/deletecar', {
            data: JSON.stringify({ id: carToDeleteID }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        expect(deleteCarResponse.status()).toBe(200); 
    });
    

    // Test 8: Ta bort en kund (DELETE)
    test('8. Delete a customer', async ({ request }) => {
        const customerToDeleteID = 4;

        const deleteCustomerResponse = await request.delete('http://localhost:9090/api/v1/deletecustomer', {
            data: JSON.stringify({ id: customerToDeleteID }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(deleteCustomerResponse.status()).toBe(200); 
    });
});


test('9. Get  customers', async ({ request }) => {
    const response = await request.get('http://localhost:9090/api/v1/customers');
    expect(response.status()).toBe(200);
});


    
   





    
    
  
    
   

    
    
       



