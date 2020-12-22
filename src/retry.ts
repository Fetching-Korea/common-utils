const retry = (count: number = 3) => async(fn: Function): Promise<any> => {
	let error: Error | null = null

	for (let i = 0; i < count; i++) {
		try {
			const result = await fn()
			return result
		} catch (e) {
			if (error === null) error = e
		}
	}
  
	throw error
}

export default retry
