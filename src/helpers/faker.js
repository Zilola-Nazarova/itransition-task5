import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    fullName: faker.person.fullName(),
    number: faker.phone.number(),
    address: faker.location.streetAddress({ useFullAddress: true }),
  }
};

export default createRandomUser;
