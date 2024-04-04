import { storageService } from '../../services/storage.service'

const useStorageStudents = () => {
	let isError = false
	const students = storageService.getItem('students') || []

	if (!students || students.length === 0) {
		isError = true
	}

	return { data: students, isLoading: false, isError }
}

export default useStorageStudents
