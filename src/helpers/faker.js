import { allFakers } from '@faker-js/faker';

export const createRandomUser = (code) => ({
  userId: allFakers[code].string.uuid(),
  fullName: allFakers[code].person.fullName(),
  number: allFakers[code].phone.number(),
  address: allFakers[code].location.streetAddress({ useFullAddress: true }),
});

export const generateRegions = () => Object.keys(allFakers).map((key) => {
  try {
    allFakers[key].person.fullName();
  } catch (e) {
    console.log(`In locale ${key}, an error occurred: ${e}`);
  }
  return key;
});
