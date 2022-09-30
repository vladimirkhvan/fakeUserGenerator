import { faker } from '@faker-js/faker/locale/en_GB';

export function createEn_GBUser() {
    const phoneFormats = [
        '(020) #### ####',
        '(024) 7### ####',
        '(029) #### ####',
        '(0113) ### ####',
        '(0114) ### ####',
        '(0121) ### ####',
    ];

    const sex = faker.name.sexType();
    const fullName = faker.name.fullName({ sex });
    const address =
        'UK' +
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
        phone: faker.phone.number(phoneFormats[Math.floor(Math.random() * 6)]),
    };
}
