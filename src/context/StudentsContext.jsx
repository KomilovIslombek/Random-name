import { createContext, useState } from 'react'
import useStorageStudents from '../hooks/student/useStorageStudents'

export const StudentsContext = createContext({
	students: [],
	setStudents: null
})

export const StudentProvider = ({ children }) => {
	const { data } = useStorageStudents()
	const [students, setStudents] = useState(data)

	return (
		<StudentsContext.Provider value={{ students, setStudents }}>
			{children}
		</StudentsContext.Provider>
	)
}
