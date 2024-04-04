import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IoPersonAdd } from 'react-icons/io5'
import { studentService } from '../../../services/student.service'
import styles from './NewStudent.module.scss'

const NewStudent = () => {
	const { data } = useQuery({
		queryKey: ['student list'],
		queryFn: () => studentService.getStudents()
	})

	const queryClient = useQueryClient()

	// Send Student query
	const { mutate, isPending } = useMutation({
		mutationKey: ['send student'],
		mutationFn: () => studentService.sendStudent('', { focusing: true }),
		onSuccess() {
			queryClient.refetchQueries({ queryKey: ['student list'] })
		},
		onError(error) {
			console.error('error', error)
		}
	})

	const newStudent = () => {
		mutate()
	}

	return (
		<div className={styles.newStudent} onClick={newStudent}>
			<span>Add new student...</span>
			<IoPersonAdd />
		</div>
	)
}

export default NewStudent
