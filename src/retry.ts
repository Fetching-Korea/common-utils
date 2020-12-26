import { sleep } from './'

export const retry = (count: number = 3, delay: number = 0) => async(fn: Function): Promise<any> => {
	let error: Error = null

	for (let i = 0; i < count; i++) {
		try {
			const result = await fn()
			return result
		} catch (e) {
			if (error === null) error = e
		}
		if (delay !== 0) await sleep(delay)
	}
  
	throw error
}
