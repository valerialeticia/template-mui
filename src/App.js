import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme }  from './styles/palette';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
