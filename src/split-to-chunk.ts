export function splitToChunks(source: any[], chunkSize: number): any[][] {
	const chunks = []

	let buffer = []
	for (const e of source) {
		buffer.push(e)

		if (buffer.length == chunkSize) {
			chunks.push(buffer)
			buffer = []
		}
	}

	return chunks
}
