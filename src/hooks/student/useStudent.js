import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { studentService } from '../../services/student.service'
import { applyString } from '../../utils/applyString'

export const useStudent = () => {
	const [id, setId] = useState(null)
	const [show, setShow] = useState(false)
	const [buttonVisibility, setButtonVisibility] = useState({}) // Состояние для отображения кнопки
	const refArea = useRef()

	// Query to server
	const queryClient = useQueryClient()

	// Remove Student query
	const { mutate, isPending } = useMutation({
		mutationKey: ['remove student'],
		mutationFn: () => studentService.removeStudent(id),
		onSuccess() {
			setId(null)
			queryClient.refetchQueries({ queryKey: ['student list'] })
		},
		onError(error) {
			console.error('error', error)
		}
	})

	// Functions
	function removeStudent(id) {
		setId(id)
		mutate()
	}

	const handleKeyDown = (e = null, { name, id }) => {
		if ((e && e.keyCode == 13 && !e.shiftKey) || e === null) {
			e?.preventDefault()
			const newName = e?.target.value || refArea.current.value
			console.log(refArea.current.value)
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
		console.log('work', name)

		const newName = e?.target.value || refArea.current.value
		if (applyString(newName) !== applyString(name)) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	return {
		show,
		id,
		setId,
		refArea,
		removeStudent,
		handleKeyDown,
		handleUpdateName,
		changeName
	}
}
