import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Styles/Cards.css";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link } from "react-router-dom";
//import { imagen } from "../Images/aceiterosamosqueta.jpg";


export default function Item ({ nombre, id, imagen, categoria, idItem }) {
    
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[300],
    '&:hover': {
      backgroundColor: purple[400],
    },
  }));

    return (
        <>
        <Link to={`/item/${idItem}`} className="card-link">
    <Card className="card-item" key={id}>
      <CardMedia
        className="card-imagen"
        component="img"
        alt={nombre}
        src={imagen}
      />
      {/* <img className='card-imagen' src={imagen} alt="" /> */}
      <CardContent className="card-textos">
        <Typography gutterBottom variant="h6" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Marca: {categoria}
        </Typography>
      </CardContent>
      <div className="card-boton">
      <CardActions>
        <ColorButton variant={"contained"}>Quiero saber más</ColorButton>
      </CardActions>
      </div>
    </Card>
    </Link>
    
        </>
    )
}