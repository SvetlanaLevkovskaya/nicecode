import React from 'react';
import styles from './video.module.scss';
import video1 from '../../../assets/video1.svg';
import video2 from '../../../assets/video2.svg';
import video3 from '../../../assets/video3.svg';

export const Video = () => {
	const videos = [
		{
			image: video1,
			alt: 'video1',
			name: 'Крабик, ходьба в бок в приседе с двумя резинками Кра…',
			dop: 'Астахова Е.В.',
		},
		{
			image: video2,
			alt: 'video2',
			name: 'Разминка для локтевого сустава',
			dop: 'Астахова Е.В.',
			status: '15.01.2019 - 22.01.2019',
		},
		{
			image: video3,
			alt: 'video3',
			name: 'Разминка для локтевого суставаРазминка для локтевого..',
			dop: 'Астахова Е.В.',
			status: '15.01.2019 - 22.01.2019',
		},
	];

	return (
		<div className={ styles.container }>
			{ videos.map((video, index) => (
				<div className={ styles.content__container } key={ index }>
					<div className={ styles.content__leftContainer }>
						{ video.image && <img src={ video.image } alt={ video.alt } /> }
						<div className={ styles.content__subcontainer }>
							<div className={ styles.content__name }>{ video.name }</div>
							<div className={ styles.content__dop }>{ video.dop }</div>
						</div>
						{ video.status && (
							<div className={ styles.content__rightContainer }>
								<div className={ styles.content__status }>{ video.status }</div>
							</div>
						) }
					</div>
				</div>
			)) }
		</div>
	);
};
