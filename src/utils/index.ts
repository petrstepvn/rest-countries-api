export const thousandSeparator = (number = -1) => {
	return number.toLocaleString('en-GB').replace(/,/g, '.');
};
