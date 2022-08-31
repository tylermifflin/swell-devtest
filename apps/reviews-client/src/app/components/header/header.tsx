import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './swell-logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
	return (
		<AppBar
			position="relative"
			sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}
		>
			<Logo css={{ width: '2rem' }} />
			<Typography variant="h1" sx={{ ml: 2 }}>
				Swell Reviews
			</Typography>
		</AppBar>
	);
}

export default Header;
