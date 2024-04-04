import { useContext, useRef, useState } from 'react'
import { StudentsContext } from '../../context/StudentsContext'
import { StudentService } from '../../services/student.service'
import { applyString } from '../../utils/applyString'

export const useStudent = () => {
	const { students, setStudents } = useContext(StudentsContext)
	const studentService = new StudentService({ students, setStudents })

	const [show, setShow] = useState(false)
	const [buttonVisibility, setButtonVisibility] = useState({}) // Состояние для отображения кнопки
	const refArea = useRef()

	// Remove Student query
	function removeStudent(id) {
		studentService.removeStudent(id)
	}

	const handleKeyDown = (e = null, { name, id }) => {
		if ((e && e.keyCode == 13 && !e.shiftKey) || e === null) {
			e?.preventDefault()
			const newName = e?.target.value || refArea.current.value
			if (applyString(newName) !== applyString(name)) {
				const res = studentService.updateStudent(id, newName)
			}
		}
	}

	const handleUpdateName = (e, { name, id }) => {
		const newName = e?.target.value || refArea.current.value
		if (applyString(newName) !== applyString(name)) {
			console.log('successfully handleUpdateName')
			const res = studentService.updateStudent(id, newName)
		}
	}

	const changeName = (e, { name }) => {
		const newName = e?.target.value || refArea.current.value
		if (applyString(newName) !== applyString(name)) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	return {
		show,
		refArea,
		removeStudent,
		handleKeyDown,
		handleUpdateName,
		changeName
	}
}
