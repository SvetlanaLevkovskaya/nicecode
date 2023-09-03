import React from 'react';
import styles from './events.module.scss'
import event from '../../../assets/event.svg'
import camera from '../../../assets/camera.svg'
import calendar from '../../../assets/calendar.svg'
import clock from '../../../assets/clock.svg'

export const Events = () => {
	const containerCount = 4;

	const renderContainers = Array.from({ length: containerCount }, (_, index) => (
		<div className={styles.content__container} key={index}>
			<div className={styles.content__leftContainer}>
				<img src={event} alt={'video1'} />
				<div className={styles.content__subcontainer}>
					<div className={styles.content__name}>Тяга резинки в шаге со сгибанием локтя под 90 градусов</div>
					<div className={styles.content__dop}>
						<div className={styles.content__bottom}>
							<img src={camera} alt={'camera'} />
							<div>Вебинар</div>
						</div>

						<div className={styles.content__bottom}>
							<img src={calendar} alt={'calendar'} />
							<div>9 марта 2021</div>
						</div>

						<div className={styles.content__bottom}>
							<img src={clock} alt={'clock'} />
							<div>17:00</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className={styles.container}>
			{renderContainers}
		</div>
	);
};

