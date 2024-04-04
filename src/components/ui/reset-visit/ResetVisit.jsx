import { GrPowerReset } from 'react-icons/gr'
import styles from './ResetVisit.module.scss'

const ResetVisit = ({ reset }) => {
	return (
		<div className={styles.ResetVisit} onClick={reset}>
			<span>Reset...</span>
			<GrPowerReset />
		</div>
	)
}

export default ResetVisit
