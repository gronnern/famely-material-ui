"use client";

import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Famely
          </Typography>
          <Link
            href="/logout" // TODO: Logout logic
            underline="hover"
            color="inherit"
            style={{ marginRight: "20px" }}
          >
            Logg ut
          </Link>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
}
