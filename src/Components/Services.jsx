import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../Styles/Services.css';

export default function AlignItemsList() {
  return (
    <div className='container-servicios'>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Drenaje Linfático" 
          src="https://www.medicinaesteticalago.com/pics_fotosproductos/30/big_crop_drenaje-linfatico.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Drenaje Linfático Manual"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography> */}
              {"Masaje linfático manual para el drenaje de líquidos. Duración: 50 min."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Masaje Descontracturante" 
          src="https://www.efisio.es/wp-content/uploads/masaje-descontracturante-cuello-madrid-getafe-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Masaje Descontracturante"
          secondary={
            <React.Fragment>
              {"Masaje específico en caso de contracturas. Duración: 50 min."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Masaje con piedras calientes" 
          src="https://www.saludterapia.com/images/saludterapia/general/9480/masaje-termal2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Masaje con Piedras Calientes"
          secondary={
            <React.Fragment>
              {'Se utiliza el poder de las piedras sumado al calor para relajar la musculatura. Duración: 50 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Masaje con cañas de bambú" 
          src="https://chamancenter.com/wp-content/uploads/2016/06/masaje-ca%C3%B1as-de-bamb%C3%BA-bambuterapia.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Masaje con Cañas de Bambú"
          secondary={
            <React.Fragment>
              {'Se utilizan las cañas de bambú para drenar gases intramusculares. Da tonicidad. Duración: 50 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </div>
  );
}
