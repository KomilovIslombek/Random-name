import styles from '@/components/layout/notification/notification.module.scss'

import { $I } from '../iquery/iquery.lib'

/**
 * NotificationService is a utility class to handle displaying notifications.
 * It can be used to display messages with different types (success,
 error) and manage the notification timeout
 */
export class NotificationService {
	#timeout
	constructor(text) {
		this.#timeout = null
	}

	#setTimeOut(callback, duration) {
		if (this.#timeout) {
			clearTimeout(this.#timeout)
		}
		this.#timeout = setTimeout(callback, duration)
	}

	/**
	 * Show a notification with a specified message and type.
	 * The notification will automatically hide ofter a specified duration.
	 * @param {string} message - The message to be displayed in the notification
	 * @param {('success'|'error')} type - The type of notification, only 'success' or 'error' are accepted.
	 */
	show(type, message) {
		if (!['success', 'error'].includes(type)) {
			throw new Error(
				'Invalid notification type. Allowed types are "success" and "error".'
			)
		}

		const classNames = {
			success: styles.success,
			error: styles.error
		}

		const notificationElement = $I('#notification')
		const className = classNames[type]

		notificationElement.text(message).addClass(className)

		this.#setTimeOut(() => {
			notificationElement.removeClass(className)
		}, 3000)
	}
}