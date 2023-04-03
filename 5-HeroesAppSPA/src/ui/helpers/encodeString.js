export const encodeString = string => {
    const str = encodeURIComponent(string).split('%').join('');

    return str.toLowerCase();
};
