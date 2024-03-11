import numeral from 'numeral';

export const delimiters = (number) => {
    return numeral(number).format('0,0');
}