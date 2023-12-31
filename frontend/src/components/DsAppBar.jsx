import { AppBar, Box, Link, Stack, Toolbar } from '@mui/material';
import { SPACING } from '../constants/contants';
import DsLoadingButton from './DsLoadingButton';

export default function DsAppBar({ children, onClick, text }) {
  return (
    // <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link color="#FFF" href="/" underline="none" variant="h6">
              Runn Form
            </Link>
          </Box>
          <Stack direction="row" spacing={SPACING}>
            {children}
            {text ? (
              <DsLoadingButton onClick={onClick}>{text}</DsLoadingButton>
            ) : null}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
