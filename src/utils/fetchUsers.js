import { createEn_GBUser } from './createEn_GBUser.js';
import { createRuUser } from './createRuUser';
import { createKoUser } from './createKoUser';
import { errorify } from './errorify.js';

export function fetchUsers(numberOfUsers, localization, numberOfErrors) {
    const localCreateUser = {
        en_GB: createEn_GBUser,
        ru: createRuUser,
        ko: createKoUser,
    };

    let users = [];
    for (let i = 0; i < numberOfUsers; i++) {
        let user = localCreateUser[localization]();
        Object.keys(user).forEach(function (key) {
            user[key] = errorify(user[key], numberOfErrors, localization);
        });
        users.push(user);
    }
    return users;
}
