import { allFakers } from '@faker-js/faker';
import { faker } from '@faker-js/faker';

export const createRandomUser = () => ({
  userId: faker.string.uuid(),
  fullName: faker.person.fullName(),
  number: faker.phone.number(),
  address: faker.location.streetAddress({ useFullAddress: true }),
});

export const generateRegions = () => Object.keys(allFakers).map((key) => {
  try {
    allFakers[key].person.fullName();
  } catch (e) {
    console.log(`In locale ${key}, an error occurred: ${e}`);
  }
  return key;
});
