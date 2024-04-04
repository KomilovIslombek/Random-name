// В новом файле useFetchStudents.js

import { useQuery } from '@tanstack/react-query'
import { studentService } from '../../services/student.service'

const useFetchStudents = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['student list'],
		queryFn: () => studentService.getStudents()
	})

	return { students: data, isLoading, isError }
}

export default useFetchStudents
