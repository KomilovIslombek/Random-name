import React from 'react'
import useFetchStudents from '../../hooks/student/useFetchStudents'
import styles from './StudentList.module.scss'
import StudentTable from './StudentTable'

const StudentList = () => {
	const { students, isLoading, isError } = useFetchStudents()

	return (
		<div className={styles?.students}>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error fetching data</div>
			) : (
				<StudentTable students={students} />
			)}
		</div>
	)
}

export default StudentList
