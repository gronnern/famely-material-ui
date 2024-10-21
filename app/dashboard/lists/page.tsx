"use client";

import {
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Grid2 as Grid,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import NextLink from "next/link";

interface ListItem {
  title: string;
  items: string[];
}

export default function Lists() {
  const [lists, setLists] = useState<ListItem[]>([]);
  const [newListTitle, setNewListTitle] = useState("");
  const [selectedListIndex, setSelectedListIndex] = useState<number | null>(
    null
  );
  const [newItem, setNewItem] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddList = () => {
    if (newListTitle.trim()) {
      setLists([...lists, { title: newListTitle.trim(), items: [] }]);
      setNewListTitle("");
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() && selectedListIndex !== null) {
      const updatedLists = [...lists];
      updatedLists[selectedListIndex].items.push(newItem.trim());
      setLists(updatedLists);
      setNewItem("");
      setOpen(false);
    }
  };

  const handleDeleteItem = (listIndex: number, itemIndex: number) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].items.splice(itemIndex, 1);
    setLists(updatedLists);
  };

  const handleOpenDialog = (index: number) => {
    setSelectedListIndex(index);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setNewItem("");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/dashboard"
          component={NextLink}
        >
          Hjem
        </Link>
        <Typography sx={{ color: "text.primary" }}>Lister</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Lag en ny liste
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Liste tittel"
            fullWidth
            margin="normal"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddList}>
            Legg til liste
          </Button>
        </Grid>
        {lists.map((list, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {list.title}
                </Typography>
                <List>
                  {list.items.map((item, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDeleteItem(index, itemIndex)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpenDialog(index)}
                >
                  Legg til element
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Legg til element</DialogTitle>
        <DialogContent>
          <TextField
            label="Element"
            fullWidth
            margin="normal"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Avbryt
          </Button>
          <Button onClick={handleAddItem} color="primary">
            Legg til
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
