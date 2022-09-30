import { faker } from '@faker-js/faker/locale/ru';

export function createRuUser() {
    const sex = faker.name.sexType();
    const fullName = faker.name.fullName({ sex });
    const address =
        'Россия' +
        ', ' +
        faker.address.cityName() +
        (Math.random() > 0.7
            ? ', село, дом ' + Math.floor(Math.random() * 50)
            : ', ' + faker.address.street() + ', ' + faker.address.secondaryAddress()) +
        ', ' +
        faker.address.zipCode();

    return {
        _id: faker.datatype.uuid(),
        fullName,
        address,
        phone: faker.phone.number('7 (###) ###-##-##'),
    };
}
