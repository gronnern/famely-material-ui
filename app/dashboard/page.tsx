"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Grid2 as Grid,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

export default function Dashboard() {
  const router = useRouter();

  const handleListClick = () => {
    router.push("/dashboard/lists");
  };

  // TODO: Kalender

  // TODO: Ukemeny

  // TODO: Meldinger

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Familien Olsen
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Lag liste
              </Typography>
              <Typography variant="body2" color="text.secondary">
                F.eks. Handlelister eller Huskelister.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={handleListClick}>
                Gå til
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Kalender
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Administrer familiens kalender.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" disabled>
                Gå til
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Ukemeny
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Se ukens middagsmeny.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" disabled>
                Gå til
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Meldinger
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Send og motta meldinger.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" disabled>
                Gå til
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
