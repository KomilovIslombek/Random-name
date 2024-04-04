import React, { useRef, useState } from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import styles from './YourStyles.module.css' // Подставьте свой путь к файлу стилей

const YourComponent = ({ data, removeStudent }) => {
	const [buttonVisibility, setButtonVisibility] = useState({}) // Состояние для отображения кнопки

	const handleKeyDown = (e, student) => {
		// Логика обработки нажатия кнопки
		// Можете оставить вашу текущую реализацию здесь
	}

	const changeName = (e, student) => {
		// Логика изменения имени студента
		// Можете оставить вашу текущую реализацию здесь
		setButtonVisibility(prevState => ({
			...prevState,
			[student.id]: true
		}))
	}

	const handleUpdateName = (e, student) => {
		// Логика обновления имени студента
		// Можете оставить вашу текущую реализацию здесь
		setButtonVisibility(prevState => ({
			...prevState,
			[student.id]: false
		}))
	}

	const refArea = useRef(null)

	return (
		<>
			{data?.map(student => (
				<tr key={student.id}>
					<td className={styles.editNameParent}>
						<textarea
							ref={refArea}
							rows={1}
							onKeyDown={e => handleKeyDown(e, student)}
							onChange={e => changeName(e, student)}
							defaultValue={student.name}
							autoFocus={student.focusing && !student.name ? true : false}
							onBlur={e => handleUpdateName(e, student)}
						/>
						<button
							disabled={!buttonVisibility[student.id]}
							onClick={() => handleKeyDown(null, student)}
							className={`${styles.updateCheck} ${buttonVisibility[student.id] ? styles.show : ''}`}
							style={{ opacity: buttonVisibility[student.id] ? 1 : 0 }} // Установка стиля opacity динамически
						>
							<IoMdCheckmarkCircleOutline />
						</button>
					</td>
					<td onClick={() => removeStudent(student.id)}>
						<MdOutlineDeleteOutline />
					</td>
				</tr>
			))}
		</>
	)
}

export default YourComponent
