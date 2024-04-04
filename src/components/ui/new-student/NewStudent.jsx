import { useContext } from 'react'
import { IoPersonAdd } from 'react-icons/io5'
import { StudentsContext } from '../../../context/StudentsContext'
import { storageService } from '../../../services/storage.service'
import styles from './NewStudent.module.scss'

const NewStudent = () => {
	const { students, setStudents } = useContext(StudentsContext)

	const newStudent = () => {
		students.push({
			id: students.length + 1,
			name: '',
			focusing: true
		})

		storageService.setItem('students', students)
		setStudents(storageService.getItem('students'))
	}

	return (
		<div className={styles.newStudent} onClick={newStudent}>
			<span>Add new student...</span>
			<IoPersonAdd />
		</div>
	)
}

export default NewStudent
