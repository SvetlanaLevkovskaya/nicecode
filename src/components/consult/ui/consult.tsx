import React from 'react';
import videoActive from '../../../assets/videoactive.svg'
import video from '../../../assets/video.svg'
import patients from '../../../assets/patients.svg'

import styles from './consult.module.scss'

export const Consult = () => {
	return (
		<div className={ styles.container }>
			<div className={ `${styles.content__container} ${styles.blue}` }>
				<div className={ styles.content__leftContainer }>
					<img src={ videoActive } alt={ 'videoActive' } />
					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Online консультация</div>
						<div className={ styles.content__dop }>15.01.2019, 12:30-13:00</div>
					</div>
				</div>
			</div>

			<div className={ styles.content__container }>
				<div className={ styles.content__leftContainer }>
					<img src={ video } alt={ 'videoActive' } />
					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Online консультация</div>
						<div className={ styles.content__dop }>15.01.2019, 12:30-13:00</div>
					</div>
				</div>
			</div>

			<div className={ styles.content__container }>
				<div className={ styles.content__leftContainer }>
					<div className={styles.imageBackground}>
						<img src={ patients } alt={ 'patients' } />
					</div>

					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Личный приём</div>
						<div className={ styles.content__dop }>15.01.2019, 12:30-13:00</div>
					</div>

					<div className={ styles.content__rightContainer }>
						<div className={styles.content__status}>Не подтверждена</div>
					</div>
				</div>

			</div>
		</div>
	);
};

