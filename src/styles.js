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
    flexWrap: 'nowrap',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 450,
    heigh: 72,
    fontSize: 24,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginLeft: -7
  },

  emptyRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 320,
    height: 441,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
  },

  socialRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: 537,
    height: 125,
    right: 320,
    borderLeft: '2px solid #000000',
    borderTop: '2px solid #000000',
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
  },

  infoRec: {
    display: 'flex',
    position: 'absolute',
    bottom: 125,
    right: 470,
    width: 500,
    height: 175
  },

  aboutMeRec: {
    width: 209,
    height: 60,
    color: 'inherit',
    position: 'absolute',
    left: 0,
    top: 30
  },

  zeroRec: {
    width: 130,
    height: 42,
    color: 'inherit',
    position: 'absolute',
    right: 110,
    top: 30
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
    marginLeft: 85,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',

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
    marginLeft: 85,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '95.6%',

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
    lineHeight: '95.6%'
  },
  star: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0
  },

  sup: {
    position: 'absolute',
    width: 378,
    height: 96,
    left: 391,
    top: 170,
    fontWeight: 'bold',
    fontSize: 120,
    lineHeight: '79.6%'
  },

  guys: {
    position: 'absolute',
    width: 378,
    height: 96,
    left: 470,
    top: 266,
    fontWeight: 'bold',
    fontSize: 120,
    lineHeight: '79.6%'
  },

  circle: {
    position: 'absolute',
    background: 'transparent',
    width: 50,
    height: 50,
    borderRadius: 50,
    border: '2px solid #000000'
  },

  zeroLink: {
    textDecoration: 'none',
    color: '#000000',
    cursor: 'none',

    '&:hover': {
      color: '#FF0000'
    }
  }
}