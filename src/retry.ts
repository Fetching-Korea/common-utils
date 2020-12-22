const retry = (limit: number = 3) => async(fn: Function): Promise<any> => {
	let error: Error

	for (let i = 0; i < limit; i++) {
		try {
			const result = await fn()
			return result
		} catch (e) {
			error = e
		}
	}
  
	throw error
}

export default retry
