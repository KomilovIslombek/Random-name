import NewStudent from '../ui/new-student/NewStudent'
import ResetVisit from '../ui/reset-visit/ResetVisit'
import StartRandom from '../ui/start-random/StartRandom'
import styles from './BottomMenu.module.scss'

const BottomMenu = ({ reset, pick }) => {
	return (
		<div className={styles.bottomMenu}>
			<NewStudent />
			<ResetVisit reset={reset} />
			<StartRandom play={pick} />
		</div>
	)
}

export default BottomMenu
