function decodeMessage(key: string, message: string): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const keyArray = [...new Set(key.replace(/ /g, '').split(''))];
	const messageArr = message.split(' ');
	let result: string[] = [];
	for (let i = 0; i < messageArr.length; i++) {
		messageArr[i].split('').map((messageItem) => {
			result.push(alphabet[keyArray.findIndex((item) => item === messageItem)]);
		});
		if (i !== messageArr.length - 1) {
			result.push(' ');
		}
	}
	return result.join('');
}
