import { IoPlayCircleOutline } from 'react-icons/io5'
import styles from './StartRandom.module.scss'

const StartRandom = ({ play }) => {
	return (
		<div className={styles.startStudent} onClick={play}>
			<span>Play...</span>
			<IoPlayCircleOutline />
		</div>
	)
}

export default StartRandom
