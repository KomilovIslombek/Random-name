import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { studentService } from '../../services/student.service.old'

const useRandomStudent = () => {
	const [randomStudent, setRandomStudent] = useState(null)
	const queryClient = useQueryClient()

	const pickRandomStudent = async () => {
		const data = await studentService.getStudents()
		const nonVisitedStudents = data.filter(student => !student.visited)

		if (nonVisitedStudents.length === 0) {
			setRandomStudent({ name: 'All the students were on their way out!' })
			return
		}

		const randomIndex = Math.floor(Math.random() * nonVisitedStudents.length)
		const selectedStudent = nonVisitedStudents[randomIndex]
		setRandomStudent(selectedStudent)

		await studentService.updateStudent(
			selectedStudent.id,
			selectedStudent.name,
			true
		)

		// Обновляем данные запроса вручную
		queryClient.setQueryData('student list', data)
	}

	const resetVisitStudents = async () => {
		const data = await studentService.getStudents()

		data.forEach(async student => {
			await studentService.updateStudent(student.id, student.name, false)
		})

		setRandomStudent({ name: '' })
	}

	return { randomStudent, pickRandomStudent, resetVisitStudents }
}

export default useRandomStudent
