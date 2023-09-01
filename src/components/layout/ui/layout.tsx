import styles from './layout.module.scss'
import { ReactNode } from 'react';

type LayoutProps = {
	children?: ReactNode;
	className?: string;
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
	return (
		<div
			className={ styles.container + ' ' + `${ className }` }>
			{ children }
		</div>
	);
};
