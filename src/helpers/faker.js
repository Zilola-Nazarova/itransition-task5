import { allFakers, faker } from '@faker-js/faker';

const createRandomUser = (code) => ({
  userId: allFakers[code].string.uuid(),
  fullName: allFakers[code].person.fullName(),
  number: allFakers[code].phone.number(),
  address: allFakers[code].location.streetAddress({ useFullAddress: true }),
});

export const generateUsers = (region, seed, quantity) => {
  faker.seed(seed);
  return faker.helpers.multiple(() => createRandomUser(region), {
    count: quantity,
  });
};

export const generateRegions = () => {
  const codeToName = new Intl.DisplayNames(['en'], { type: 'language' });
  const languages = [];
  Object.keys(allFakers).map((code) => {
    try {
      allFakers[code].person.fullName();
      const langName = code.replace(/_/g, '-');
      languages.push({ code, name: codeToName.of(langName) });
    } catch (e) {
      console.log(`Error for locale ${code} occured. Datails: ${e}`);
    }
    return null;
  });
  return languages;
};
