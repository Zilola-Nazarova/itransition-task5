import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    number: faker.phone.number(),
    address: faker.address.streetAddress({ useFullAddress: true }),
  };
}

export default createRandomUser;
