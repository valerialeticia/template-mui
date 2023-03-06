import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/palette';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained">Hello World</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
