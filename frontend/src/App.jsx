import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button
        variant="contained"
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
        })}
      >
        cualquier cosa
      </Button>
    </>
  );
}

export default App;
