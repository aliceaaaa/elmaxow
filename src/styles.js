const photoWidth = window.innerWidth / 4.5;
const photoHeight = window.innerHeight / 2;
const socialWidth = window.innerWidth / 2.16;
const socialHeight = window.innerHeight / 7.2;
const emailWidth = window.innerWidth / 9.6;
const emailHeight = window.innerHeight / 3.5;
const infoHeight = window.innerHeight / 5.14;

export default {
  app: {
    position: 'inherit',
    fontFamily: 'Space Mono',
    height: '100vh',
    cursor: 'none'
  },

  appMobile: {
    width: 375
  },

  header: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 450,
    height: 72,
    fontSize: 24,
    alignItems: 'center',
    zIndex: 9,
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  header1: {
    animation: '$marquee 20s linear infinite'
  },

  header2: {
    animation: '$marquee2 20s linear infinite',
    animationDelay: '10s'
  },

  '@keyframes marquee': {
    from: {
      transform: 'translateX(-100%)'
    },
    to: {
      transform: 'translateX(100%)'
    }
  },

  '@keyframes marquee2': {
    from: {
      transform: 'translateX(-200%)'
    },
    to: {
      transform: 'translateX(0%)'
    }
  },

  runLine: {
    animation: 'scroll-left 5s linear infinite',
    zIndex: 9
  },

  photoRec: {
    display: 'flex',
    position: 'absolute',
    boxSizing: 'border-box',
    bottom: 0,
    right: 0,
    width: photoWidth,
    height: photoHeight,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    zIndex: 9,
  },

  socialRec: {
    display: 'flex',
    position: 'absolute',
    boxSizing: 'border-box',
    bottom: 0,
    width: socialWidth,
    height: socialHeight,
    right: photoWidth,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    zIndex: 9
  },

  emailRec: {
    position: 'absolute',
    boxSizing: 'border-box',
    bottom: socialHeight,
    right: photoWidth,
    width: emailWidth,
    height: emailHeight,
    padding: 20,
    textAlign: 'left',
    justifyContent: 'end',
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    fontSize: 'calc(16px + 3*(100vw - 480px)/1440)',
    lineHeight: '133%',
    zIndex: 9
  },

  emailText: {
    position: 'absolute',
    height: infoHeight,
    bottom: 0,
    right: 20,
    left: 20
  },

  infoBox: {
    display: 'flex',
    position: 'absolute',
    boxSizing: 'border-box',
    bottom: socialHeight,
    height: emailHeight,
    right: emailWidth + photoWidth,
    width: socialWidth - emailWidth,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',

  },

  aboutMeRec: {
    display: 'flex',
    position: 'absolute',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    bottom: 80,
    left: 20,
    color: 'inherit',
    justifyContent: 'center',
    fontSize: 'calc(16px + 3*(100vw - 480px)/1440)',
    zIndex: 9
  },

  zeroRec: {
    display: 'flex',
    position: 'absolute',
    boxSizing: 'border-box',
    flexDirection: 'column',
    bottom: 105,
    right: 130,
    color: 'inherit',
    alignItems: 'start',
    fontSize: 'calc(16px + 3*(100vw - 480px)/1440)',
    zIndex: 9,

    '&:not(:first-child)': {
      marginRight: 20
    }
  },

  dribble: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: (socialWidth - emailWidth) / 2,
    alignItems: 'start',
    margin: 0,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },

  behance: {
    display: 'flex',
    justifyContent: 'center',
    width: (socialWidth - emailWidth) / 2,
    alignItems: 'start',
    margin: 0,
    paddingLeft: 20,
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },

  insta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    width: window.innerWidth / 9.6 - 10,
    margin: 0,
    paddingLeft: 20,
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },

  emailReference: {
    textDecoration: 'none',
    color: '#000',
    cursor: 'none',
    fontSize: 'calc(16px + 3*(100vw - 480px)/1440)',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },

  maxChanba: {
    display: 'flex',
    position: 'absolute',
    top: 146,
    right: 320,
    width: 131,
    height: 58,
    color: '#FF0000',
    fontSize: 'calc(30px + 34*(100vw - 1150px)/770)',
    fontWeight: 'bold',
    lineHeight: '95.6%',
    zIndex: 9
  },

  star: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },

  star2: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  },

  sup: {
    position: 'absolute',
    width: 378,
    height: 96,
    left: 391,
    top: 170,
    fontWeight: 'bold',
    fontSize: 'calc(120px + 34*(100vw - 1150px)/770)',
    lineHeight: '79.6%',
    zIndex: 9
  },

  guys: {
    position: 'absolute',
    width: 378,
    height: 96,
    left: 470,
    top: 266,
    fontWeight: 'bold',
    fontSize: 'calc(120px + 34*(100vw - 1150px)/770)',
    lineHeight: '79.6%',
    zIndex: 9
  },

  circle: {
    position: 'absolute',
    background: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 50,
    border: '2px solid #000000',
    zIndex: 2
  },

  zeroLink: {
    textDecoration: 'none',
    color: '#000000',
    cursor: 'none',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },
}