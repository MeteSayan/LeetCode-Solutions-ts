//! I think the question is not clear enough. It's asking for a function that encodes and decodes a URL.
//! But the example is not clear. It's just encoding and decoding the URL. So, I'm going to implement the encoding and decoding functions.

function encode(longUrl: string): string {
	return encodeURIComponent(longUrl);
}

function decode(shortUrl: string): string {
	return decodeURIComponent(shortUrl);
}

// OR

function encode2(longUrl: string): string {
	return longUrl;
}

function decode2(shortUrl: string): string {
	return shortUrl;
}
