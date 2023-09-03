import React from 'react';
import video1 from '../../../assets/video1.svg'
import video2 from '../../../assets/video2.svg'
import video3 from '../../../assets/video3.svg'
import styles from './video.module.scss'

export const Video = () => {
	return (
		<div className={ styles.container }>
			<div className={ `${styles.content__container}` }>
				<div className={ styles.content__leftContainer }>
					<img src={ video1 } alt={ 'video1' } />
					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Крабик, ходьба в бок в приседе с двумя резинками Кра…</div>
						<div className={ styles.content__dop }>Астахова Е.В.</div>
					</div>
				</div>
			</div>

			<div className={ styles.content__container }>
				<div className={ styles.content__leftContainer }>
					<img src={ video2 } alt={ 'video2' } />
					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Разминка для локтевого сустава</div>
						<div className={ styles.content__dop }>Астахова Е.В.</div>
					</div>
					<div className={ styles.content__rightContainer }>
						<div className={ styles.content__status }>15.01.2019 - 22.01.2019</div>
					</div>
				</div>
			</div>

			<div className={ styles.content__container }>
				<div className={ styles.content__leftContainer }>
					<div className={ styles.imageBackground }>
						<img src={ video3 } alt={ 'video3' } />
					</div>

					<div className={ styles.content__subcontainer }>
						<div className={ styles.content__name }>Разминка для локтевого суставаРазминка для локтевого..</div>
						<div className={ styles.content__dop }>Астахова Е.В.</div>
					</div>

					<div className={ styles.content__rightContainer }>
						<div className={ styles.content__status }>15.01.2019 - 22.01.2019</div>
					</div>
				</div>

			</div>
		</div>
	);
};

