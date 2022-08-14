import { CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import background from "./images/back.svg";
import Slots from "./pages/Slots";
import theme from "./utility/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
  layout: {
    padding: "20px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <div className={classes.layout}>
          <Home />
          <Slots />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
