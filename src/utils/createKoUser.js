import { faker } from '@faker-js/faker/locale/ko';

export function createKoUser() {
    const phoneFormats = ['82 (2) #### ####', '82 (52) ### ####', '82 (51) ### ####'];
    const sex = faker.name.sexType();
    const fullName = faker.name.fullName({ sex });
    const address =
        '한국' +
        ', ' +
        faker.address.cityName() +
        ', ' +
        faker.address.secondaryAddress() +
        ', ' +
        faker.address.zipCode();

    return {
        _id: faker.datatype.uuid(),
        fullName,
        address,
        phone: faker.phone.number(phoneFormats[Math.floor(Math.random() * 3)]),
    };
}
