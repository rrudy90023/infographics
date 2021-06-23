import React from 'react'; 
import { Link } from 'react-router-dom';
import Data from '../data.js';
import {StyleRoot} from 'radium';


//  images for each geo and store paths in flagPaths variable
// also added a shorter geocode variable to the data so we dont have to worry about having long geocodes with spaces
var flagPaths = {
  us: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/us.svg',
  ca: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ca.svg',
  au: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/au.svg',
  jp: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/jp.svg',
  kr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/kr.svg',
  cn: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/cn.svg',
  hk: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/hk.svg',
  uk: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/uk.svg',
  fr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/fr.svg',
  de: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/de.svg',
  es: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/es_p.png',
  it: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/it.svg',
  ch: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ch.svg',
  uae: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/uae.svg',
  tr: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/tr.svg',
  ru: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/ru.svg',
  br: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/br.svg',
  mx: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/mx_p.png',
  cl: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/cl.svg',
  co: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/co.svg',
  sg: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/sg.svg',
  th: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/th.svg',
  my: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/my.svg',
  id: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/id.svg',
  ind: 'https://rudes-media.s3.us-west-1.amazonaws.com/infog/images/flags/in.svg'
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




