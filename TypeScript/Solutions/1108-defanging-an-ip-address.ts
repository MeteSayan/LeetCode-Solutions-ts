// Without using js methods
function defangIPaddr(address: string): string {
	let newStr = '';
	for (let x = 0; x < address.length; x++) {
		if (address[x] === '.') newStr += '[.]';
		else newStr += address[x];
	}
	return newStr;
}

// With using js methods
function defangIPaddr2(address: string): string {
	return address.replaceAll('.', '[.]');
}
