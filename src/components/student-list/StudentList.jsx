import React from 'react'
import styles from './StudentList.module.scss'
import StudentTable from './StudentTable'

const StudentList = () => {
	return (
		<div className={styles?.students}>
			<StudentTable />
		</div>
	)
}

export default StudentList
