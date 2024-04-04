// StudentRow.js

import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import styles from './StudentList.module.scss'

const StudentRow = ({ student, actions }) => {
	const {
		removeStudent,
		handleKeyDown,
		changeName,
		refArea,
		handleUpdateName
	} = actions

	return (
		<tr key={student.id}>
			<td className={styles.editNameParent}>
				<textarea
					ref={refArea}
					rows={1}
					onKeyDown={e => handleKeyDown(e, student)}
					onChange={e => changeName(e, student)}
					defaultValue={student.name}
					autoFocus={(student.focusing && !student.name) || !student.name}
					onBlur={e => handleUpdateName(e, student)}
				/>
				<button
					className={styles.updateCheck}
					onClick={() => handleKeyDown(null, student)}
				>
					<IoMdCheckmarkCircleOutline />
				</button>
			</td>
			<td onClick={() => removeStudent(student.id)}>
				<MdOutlineDeleteOutline />
			</td>
		</tr>
	)
}

export default StudentRow
