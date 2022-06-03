import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Styles/Cards.css";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { purple } from '@mui/material/colors';
import { Container } from "@mui/system";
import { Link } from "react-router-dom";


export default function ItemDetail ({producto}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#4a148c',
      },
    },
  });

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
    <Card key={producto.id} className="card-item-detail" >
      <CardMedia
        className="card-imagen-detail"
        component="img"
        alt={producto.nombre}
        src={producto.imagen}
      />
      <CardContent className="card-textos-detail">
        <Typography gutterBottom variant="h6" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
         Precio: $ {producto.precio}
        </Typography>
      </CardContent>
      <div className="card-boton-detail">
      <CardActions>
      <Link to={"/"}>
      <Button variant="outlined" size="medium" color="primary">
          Volver
        </Button>
        </Link>
      </CardActions>
      </div>
    </Card>
    </Container>
    </ThemeProvider>
        </>
    )
}
