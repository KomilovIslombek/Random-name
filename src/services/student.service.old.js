import axios from 'axios'

class StudentService {
	#URL = 'http://localhost:3000/students'

	async getStudents() {
		const { data } = await axios.get(this.#URL)
		return data
	}

	async sendStudent(name = '', { focusing }) {
		const { data } = await axios.post(this.#URL, { name, focusing })
		return data
	}

	async removeStudent(id) {
		const { data } = await axios.delete(`${this.#URL}/${id}`)
		return data
	}

	async updateStudent(id, name, visited = false) {
		if (!id && !name) return undefined

		try {
			const { data } = await axios.put(`${this.#URL}/${id}`, {
				name,
				visited
			})
			return data
		} catch (error) {
			throw new Error(`${error} f: updateStudent`)
		}
	}
}

export const studentService = new StudentService()
