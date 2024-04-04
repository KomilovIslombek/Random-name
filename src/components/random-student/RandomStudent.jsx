import React from 'react'

const RandomStudent = ({ randomStudent, styles }) => {
	return (
		<div className='card'>
			{randomStudent && (
				<div>
					<h1 className={styles.selectedStudent}>{randomStudent.name}</h1>
				</div>
			)}
		</div>
	)
}

export default RandomStudent
