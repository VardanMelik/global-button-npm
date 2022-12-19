import GlobalButton from "./components/GlobalButton";

function App() {
  return (
    <div>

      <GlobalButton
        text="Text"
        variant="text"
      />

      <GlobalButton
        text="Contained"
        variant="contained"outlined
      />

      <GlobalButton
        text="Outlined"
        variant="outlined"
      />
    </div>
  );
}

export default App;
