import React from 'react'; 
import { Link } from 'react-router-dom';
import Data from '../data.js';
import {StyleRoot} from 'radium';


//  images for each geo and store paths in flagPaths variable
// also added a shorter geocode variable to the data so we dont have to worry about having long geocodes with spaces
var flagPaths = {
  us: 'http://rudes.de/infog/images/flags/us.svg',
  ca: 'http://rudes.de/infog/images/flags/ca.svg',
  au: 'http://rudes.de/infog/images/flags/au.svg',
  jp: 'http://rudes.de/infog/images/flags/jp.svg',
  kr: 'http://rudes.de/infog/images/flags/kr.svg',
  cn: 'http://rudes.de/infog/images/flags/cn.svg',
  hk: 'http://rudes.de/infog/images/flags/hk.svg',
  uk: 'http://rudes.de/infog/images/flags/uk.svg',
  fr: 'http://rudes.de/infog/images/flags/fr.svg',
  de: 'http://rudes.de/infog/images/flags/de.svg',
  es: 'http://rudes.de/infog/images/flags/es_p.png',
  it: 'http://rudes.de/infog/images/flags/it.svg',
  ch: 'http://rudes.de/infog/images/flags/ch.svg',
  uae: 'http://rudes.de/infog/images/flags/uae.svg',
  tr: 'http://rudes.de/infog/images/flags/tr.svg',
  ru: 'http://rudes.de/infog/images/flags/ru.svg',
  br: 'http://rudes.de/infog/images/flags/br.svg',
  mx: 'http://rudes.de/infog/images/flags/mx_p.png',
  cl: 'http://rudes.de/infog/images/flags/cl.svg',
  co: 'http://rudes.de/infog/images/flags/co.svg',
  sg: 'http://rudes.de/infog/images/flags/sg.svg',
  th: 'http://rudes.de/infog/images/flags/th.svg',
  my: 'http://rudes.de/infog/images/flags/my.svg',
  id: 'http://rudes.de/infog/images/flags/id.svg',
  ind: 'http://rudes.de/infog/images/flags/in.svg'
};


class Geos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: Data
    }
  }





  render(){

    var styles = {
      ipad: {
        maxWidth: '70%',
        display: 'inline-block',
        cursor:  'pointer',
        textAlign: 'center',
        verticalAlign: 'bottom',


          '@media (min-width: 768px)': {
            maxWidth: '50%'
          }
      },

      desktop: {
        width: '30%',
        height: '160px',
        display: 'inline-block',
        marginTop: '5%',
        textAlign: 'center',
        verticalAlign: 'bottom',

          '@media (min-width: 1024px)': {
            width: '300px',
            height: '200px',
          }
      },

      holder: {
        backgroundColor: '#383838',
        width: '100%',
        color: '#f1f1f1',
        height: 'auto',
        textAlign: 'center',
        paddingBottom: '10px',

          '@media (min-width: 768px)': {
            paddingBottom: '25px',
          },


          '@media (min-width: 1024px)': {
            paddingBottom: '60px',
          }
      }
    }


    var geos = this.state.data.map((geo, index)=>{

      var flag = flagPaths[geo.geo];

      var path = "/geo/"+geo.geo.toLowerCase();


      return (
        <div key={geo.geo} style={[styles.desktop]}>
          <Link to={path} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            
            <img src={flag} style={[styles.ipad]} alt="" />
            <span style={{'color':'#a4a4a4', 'width': '90%', 'display': 'inline-block', 'cursor': 'pointer', 'textAlign': 'center', 'fontSize': '16px', 'fontWeight': '300', 'marginTop': '5%'}}>{geo.country}</span>
          </Link>
        </div>
      );
    })

    return (
      <StyleRoot>
        <div style={[styles.holder]}>
          <div style={{'backgroundColor': '#383838', 'width': '100%', 'height': '30px'}}></div>
          {geos}
        </div>
        </StyleRoot>
    )
  }
}


export default Geos;




