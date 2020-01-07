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
    bottom: 0,
    right: 0,
    width: 320,
    height: 441,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    zIndex: 9,
  },

  socialRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: 667,
    height: 125,
    right: 320,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    zIndex: 9
  },

  emailRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 125,
    right: 320,
    width: 150,
    height: 257,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
    zIndex: 9
  },

  infoRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 125,
    right: 470,
    width: 500,
    height: 175,
    zIndex: 9
  },

  aboutMeRec: {
    width: 209,
    height: 60,
    color: 'inherit',
    position: 'absolute',
    left: 0,
    top: 30,
    zIndex: 9
  },

  zeroRec: {
    width: 130,
    height: 42,
    color: 'inherit',
    position: 'absolute',
    right: 110,
    top: 30,
    zIndex: 9
  },

  dribble: {
    display: 'flex',
    flexDirection: 'column',
    width: 118,
    height: 44,
    marginTop: 40,
    marginLeft: 20,
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
    flexDirection: 'column',
    width: 103,
    height: 44,
    marginTop: 40,
    marginLeft: 142,
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
    position: 'relative',
    flexDirection: 'column',
    width: 74,
    height: 44,
    marginTop: 40,
    marginLeft: 142,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  },

  emailText: {
    display: 'flex',
    position: 'absolute',
    bottom: 38,
    left: 20,
    flexDirection: 'column',
    width: 110,
    height: 105,
    fontSize: 16,
    lineHeight: '133%',
    zIndex: 9
  },

  maxChanba: {
    display: 'flex',
    position: 'absolute',
    top: 146,
    right: 320,
    width: 131,
    height: 58,
    color: '#FF0000',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: '95.6%',
    zIndex: 9
  },

  star: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1
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
    fontSize: 120,
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
    fontSize: 120,
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

  emailReference: {
    textDecoration: 'none',
    color: '#000',
    cursor: 'none',
    zIndex: 9,

    '&:hover': {
      color: '#FF0000'
    }
  }
}