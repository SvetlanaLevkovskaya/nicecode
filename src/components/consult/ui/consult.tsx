import React from 'react';
import styles from './consult.module.scss';
import videoActive from '../../../assets/videoactive.svg';
import video from '../../../assets/video.svg';
import patients from '../../../assets/patients.svg';

export const Consult = () => {
	const containers = [
		{
			image: videoActive,
			alt: 'videoActive',
			name: 'Online консультация',
			dop: '15.01.2019, 12:30-13:00',
			className: `${ styles.content__container } ${ styles.blue }`,
		},
		{
			image: video,
			alt: 'video',
			name: 'Online консультация',
			dop: '15.01.2019, 12:30-13:00',
			className: styles.content__container,
		},
		{
			image: patients,
			alt: 'patients',
			name: 'Личный приём',
			dop: '15.01.2019, 12:30-13:00',
			className: styles.content__container,
		},
	];

	return (
		<div className={ styles.container }>
			{ containers.map((container, index) => (
				<div className={ container.className } key={ index }>
					<div className={ styles.content__leftContainer }>
						{ container.image && (
							<img src={ container.image } alt={ container.alt } />
						) }
						<div className={ styles.content__subcontainer }>
							<div className={ styles.content__name }>{ container.name }</div>
							<div className={ styles.content__dop }>{ container.dop }</div>
						</div>
					</div>
				</div>
			)) }
		</div>
	);
};
