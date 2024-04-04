import React from 'react'
import BottomMenu from '../../components/bottom-menu/BottomMenu'
import RandomStudent from '../../components/random-student/RandomStudent'
import StudentList from '../../components/student-list/StudentList'
import useRandomStudent from '../../hooks/student/useRandomStudent'
import styles from './Home.module.scss'

function Home() {
	const { randomStudent, pickRandomStudent, resetVisitStudents } =
		useRandomStudent()

	return (
		<div className={`${styles.container} ${styles.wrapper}`}>
			<StudentList />
			<RandomStudent randomStudent={randomStudent} styles={styles} />
			<BottomMenu reset={resetVisitStudents} pick={pickRandomStudent} />
		</div>
	)
}

export default Home
