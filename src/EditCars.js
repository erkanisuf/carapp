import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@material-ui/core/";

export default function EditCars(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
    price: "",
  });

  const handleClickOpen = () => {
    setCar({
      brand: props.car.brand,
      model: props.car.model,
      color: props.car.color,
      fuel: props.car.fuel,
      year: props.car.year,
      price: props.car.price,
    });
    setOpen(true);
  };

  const handleClose = () => {
    props.updateCar(props.car._links.self.href, car);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit existing car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="brand"
            name="brand"
            value={car.brand}
            onChange={inputChanged}
            label="Brand"
            fullWidth
          />
          <TextField
            margin="dense"
            id="model"
            name="model"
            value={car.model}
            onChange={inputChanged}
            label="Model"
            fullWidth
          />
          <TextField
            margin="dense"
            id="color"
            name="color"
            value={car.color}
            onChange={inputChanged}
            label="Color"
            fullWidth
          />
          <TextField
            margin="dense"
            id="fuel"
            name="fuel"
            value={car.fuel}
            onChange={inputChanged}
            label="Fuel"
            fullWidth
          />
          <TextField
            margin="dense"
            id="year"
            name="year"
            value={car.year}
            onChange={inputChanged}
            label="Year"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            value={car.price}
            onChange={inputChanged}
            label="Price (€)"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
