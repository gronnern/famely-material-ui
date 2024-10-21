"use client";

import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Velkommen til Famely
      </Typography>
      <Typography variant="h5" paragraph>
        Famely hjelper deg med å organisere familiens aktiviteter og oppgaver på
        en enkel måte.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Logg inn
      </Button>
    </Container>
  );
}
