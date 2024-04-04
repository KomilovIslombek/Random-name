import { useContext, useState } from 'react'
import { StudentsContext } from '../../context/StudentsContext'
import { StudentService } from '../../services/student.service'

const useRandomStudent = () => {
	const { students, setStudents } = useContext(StudentsContext)
	const studentService = new StudentService({ students, setStudents })

	const [randomStudent, setRandomStudent] = useState(null)

	const pickRandomStudent = () => {
		const nonVisitedStudents = students.filter(
			student => !student.visited && student.name
		)

		if (nonVisitedStudents.length === 0) {
			setRandomStudent({ name: 'All the students were on their way out!' })
			return
		}

		const randomIndex = Math.floor(Math.random() * nonVisitedStudents.length)
		const selectedStudent = nonVisitedStudents[randomIndex]
		setRandomStudent(selectedStudent)

		studentService.updateStudent(selectedStudent.id, selectedStudent.name, true)

		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const resetVisitStudents = () => {
		studentService.resetStudents()

		setRandomStudent({ name: '' })
	}

	return { randomStudent, pickRandomStudent, resetVisitStudents }
}

export default useRandomStudent
