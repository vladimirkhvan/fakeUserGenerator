const localAlphabet = {
    'en_GB': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    'ru': ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],
    'ko': ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ']
};

function deleteChar(data) {
    data = data.split('');
    data.splice(Math.floor(Math.random() * data.length), 1);
    return data.join('');
}

function addChar(data, localization) {
    data = data.split('');
    data.splice(
        Math.floor(Math.random() * data.length),
        0,
        localAlphabet[localization][Math.floor(Math.random() * localAlphabet[localization].length)],
    );
    return data.join('');
}

function swapChars(data) {
    const randomIndex = Math.floor(Math.random() * data.length - 1);
    data = data.split('');
    data.splice(randomIndex, 2, data[randomIndex + 1], data[randomIndex]);
    return data.join('');
}

export const errorify = (data, numberOfErrors, localization) => {
    const errorifyMethods = {
        0: swapChars,
        1: (data) => addChar(data, localization),
        2: deleteChar,
    };
    let errors =
        numberOfErrors % 1 === 1
            ? numberOfErrors
            : Math.floor(numberOfErrors) + (Math.random() < numberOfErrors % 1 ? 1 : 0);

    let result = data;

    for (let i = 0; i < errors; i++) {
        let randomIndex = Math.floor(Math.random() * 3);
        if (data.length / 2 > result.length) {
            randomIndex = 1;
            result = errorifyMethods[randomIndex](result);
        } else if (data.length * 1.5 < result.length) {
            randomIndex = 2;
            result = errorifyMethods[randomIndex](result);
        } else {
            result = errorifyMethods[randomIndex](result);
        }
    }
    return result;
};
