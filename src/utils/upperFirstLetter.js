export const upperFirstLetter = (string) => {
    const upper = string.charAt(0).toUpperCase() + string.slice(1);
    return upper;
}