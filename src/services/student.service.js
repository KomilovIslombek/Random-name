import { storageService } from './storage.service'

export class StudentService {
	constructor({ students, setStudents }) {
		this.students = students
		this.setStudents = setStudents
	}

	removeStudent(id) {
		const data = this.students.filter(student => student.id !== id)
		storageService.setItem('students', data)
		this.setStudents(storageService.getItem('students'))
	}

	updateStudent(id, newName, visited = false) {
		const updatedStudents = this.students.map(student => {
			if (student.id === id) {
				return { ...student, name: newName, visited, focusing: false }
			}
			return student
		})

		storageService.setItem('students', updatedStudents)
		this.setStudents(storageService.getItem('students'))
	}

	resetStudents() {
		const updatedStudents = this.students.map(student => ({
			...student,
			visited: false
		}))

		storageService.setItem('students', updatedStudents)
		this.setStudents(storageService.getItem('students'))
	}
}

// export const studentService = new StudentService()
