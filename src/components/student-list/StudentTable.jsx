import { useStudent } from '../../hooks/student/useStudent'
import styles from './StudentList.module.scss'
import StudentRow from './StudentRow'

const StudentTable = ({ students }) => {
	const {
		setId,
		refArea,
		removeStudent,
		handleKeyDown,
		handleUpdateName,
		changeName
	} = useStudent()

	return (
		<table className={styles.table_container}>
			<thead>
				<tr>
					<th>
						<h1>NAME</h1>
					</th>
					<th>
						<h1>DELETE</h1>
					</th>
				</tr>
			</thead>
			<tbody>
				{students.map(student => (
					<StudentRow
						key={student.id}
						student={student}
						actions={{
							removeStudent,
							handleKeyDown,
							changeName,
							refArea,
							handleUpdateName
						}}
					/>
				))}
			</tbody>
		</table>
	)
}

export default StudentTable
