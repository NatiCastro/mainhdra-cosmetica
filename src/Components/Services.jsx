import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import '../Styles/Services.css';
import Footer from './Footer';

export default function AlignItemsList() {
  return (
    <>
    <div className='container-padre'>
    <div className='container-servicios'>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Limpieza Facial" 
          src="https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2020/04/limpieza-facial-casa-eliminar-puntos-negros.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Limpieza facial Profunda"
          secondary={
            <React.Fragment>
              {"Limpieza profunda con extracciones, hidratación, máscaras. Duración: 60 min."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Peeling Facial" 
          src="https://cdn.atrapalo.com/common/photo/event/4/8/5/8089/1198643/vertic_880_0.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Peeling Facial"
          secondary={
            <React.Fragment>
              {"Peeling físico y químico. Pieles grasas, gruesas, manchas, arrugas. Duración: 60 min."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tratamiento rosácea y acné" 
          src="https://www.telebelleza.es/img/cms/limpieza-facial-profesional-banner.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tratamiento Rosácea y Acné"
          secondary={
            <React.Fragment>
              {'Tratamiento específico de estas patologías comunes de la piel. Se aborda de manera integral con aparatología y máscaras específicas. Duración: 60 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Radiofrecuencia Facial" 
          src="https://bertaarantave.com/images/tratamientos/dermoabrasion/radiofrecuencia-facial-pequea.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Radiofrecuencia Facial"
          secondary={
            <React.Fragment>
              {'Ideal para pieles a partir de los 30 años. Flaccidez y arrugas en rostro, cuello y/o escote. Tensa la piel por la formación de nuevo colágeno en dermis. Da tonicidad. Duración: 30 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </div>
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
              {"Masaje linfático manual para el drenaje de líquidos. Ideal piernas hinchadas, embarazadas, mala circulación, celulitis. Duración: 60 min."}
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
              {"Masaje específico para disolver las contracturas. Incluye aromaterapia. Duración: 60 min."}
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
              {'El efecto térmico y antiinflamatorio de las piedras junto al masaje manual ofrece un profundo bienestar y relajación total. Duración: 60 min.'}
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
              {'Drena gases intramusculares (como las antiguas barras de azufre). Masaje ideal en estados de tristeza, angustia. Nos conecta con la tierra, y nuestro impulso para desafiar la vida. Duración: 50 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </div>
    <div className='container-servicios'>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ultracavitación" 
          src="https://s03.s3c.es/imag/_v0/770x420/6/9/4/ultracavitacion-770.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ultracavitación"
          secondary={
            <React.Fragment>
              {"Tratamiento reductor de adiposidad localizada y celulitis. Duración: 30 min. Paquetes por 4, 6 y 8 sesiones."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Radiofrecuencia Corporal" 
          src="https://germainegoyamadrid.com/wp-content/uploads/2016/11/Radiofrecuencia-corporal-gluteos-Deepheat-Sorisa_265x209.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Radiofrecuencia Corporal"
          secondary={
            <React.Fragment>
              {"Tratamiento para flaccidez de la piel, celulitis flácida, estrías. Duración: 40 min. Paquetes por 4, 6 y 8 sesiones."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Electroporación Corporal" 
          src="https://aurorareig.com/wp-content/uploads/2020/01/radiofrecuencia-coporral.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Electroporación Corporal"
          secondary={
            <React.Fragment>
              {'Se trata de una aparatología que reemplaza a la mesoterapia. Permite la introduccuón en profundidad de activos según la necesidad SIN AGUJAS. Duración: 30 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Peeling Corporal" 
          src="https://belleza.top/imagenes/exfoliante-corporal-400x217.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Peeling Corporal"
          secondary={
            <React.Fragment>
              {'Afina la piel de manera progresiva, tiene un efecto aclarante y reparador total de la piel. Ideal para estrías, acné (espalda), manchas oscuras (axilas). Duración: 40 min.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </div>
    </div>
    <Footer />
    </>
  );
}
