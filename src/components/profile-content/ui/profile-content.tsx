import React from 'react';
import styles from './profileContent.module.scss'
import { Notes } from '../../notes';
import { Consult } from '../../consult';
import { Video } from '../../video';
import { Events } from '../../events';


export const ProfileContent = ({ activeButton }: {
	activeButton: string;
}) => {
	const getContent = () => {
		switch (activeButton) {
			case 'Заметки':
				return <Notes />;
			case 'Консультации':
				return <Consult />;
			case 'Видео':
				return <Video />;
			case 'Мероприятия':
				return <Events />;
			default:
				return <Notes />;
		}
	};

	return <div className={ styles.profileContent__container }>{ getContent() }</div>;
};
