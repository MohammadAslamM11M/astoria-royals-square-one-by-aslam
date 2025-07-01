import React from "react";
import LeadForm from "./components/LeadForm";
import { CssBaseline, Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <LeadForm />
      </Container>
    </>
  );
}

export default App;
