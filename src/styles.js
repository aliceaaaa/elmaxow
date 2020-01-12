export default {
  app: {
    position: "inherit",
    fontFamily: "Space Mono",
    height: "100vh",
    cursor: "none"
  },

  header: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    zIndex: 9,
    whiteSpace: "nowrap",
    overflow: "hidden"
  },

  header1: {
    animation: "$marquee 20s linear infinite"
  },

  header2: {
    animation: "$marquee2 20s linear infinite",
    animationDelay: "10s"
  },

  "@keyframes marquee": {
    from: {
      transform: "translateX(-100%)"
    },
    to: {
      transform: "translateX(100%)"
    }
  },

  "@keyframes marquee2": {
    from: {
      transform: "translateX(-200%)"
    },
    to: {
      transform: "translateX(0%)"
    }
  },

  runLine: {
    animation: "scroll-left 5s linear infinite",
    zIndex: 9
  },

  maxChanba: {
    display: "flex",
    position: "absolute",
    fontWeight: "bold",
    color: "#FF0000",
    lineHeight: "95.6%",
    zIndex: 9
  },

  photoBox: {
    display: "flex",
    position: "absolute",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 9
  },

  starBig: {
    display: "flex",
    position: "absolute",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },

  starSmall: {
    display: "flex",
    position: "absolute",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },

  emailBox: {
    position: "absolute",
    boxSizing: "border-box",
    padding: 20,
    textAlign: "left",
    justifyContent: "end",
    borderLeft: "2px solid #000000",
    borderTop: "2px solid #000000",
    lineHeight: "133%",
    zIndex: 9
  },

  emailReference: {
    textDecoration: "none",
    color: "#000",
    cursor: "none",
    zIndex: 9,

    "&:hover": {
      color: "#FF0000"
    }
  },

  infoBox: {
    display: "flex",
    position: "absolute",
    boxSizing: "border-box"
  },

  aboutMeBox: {
    display: "flex",
    position: "absolute",
    boxSizing: "border-box",
    flexWrap: "wrap",
    color: "inherit",
    justifyContent: "center",
    zIndex: 9
  },

  zeroBox: {
    display: "flex",
    position: "absolute",
    boxSizing: "border-box",
    flexDirection: "column",
    color: "inherit",
    alignItems: "start",
    zIndex: 9
  },

  zeroLink: {
    textDecoration: "none",
    color: "#000000",
    cursor: "none",
    zIndex: 9,

    "&:hover": {
      color: "#FF0000"
    }
  },

  socialBox: {
    display: "flex",
    position: "absolute",
    boxSizing: "border-box",
    bottom: 0,
    borderLeft: "2px solid #000000",
    borderTop: "2px solid #000000",
    zIndex: 9
  },

  dribble: {
    position: "absolute",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    fontWeight: "bold",
    lineHeight: "95.6%",
    zIndex: 9,

    "&:hover": {
      color: "#FF0000"
    }
  },

  behance: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    margin: 0,
    flexDirection: "column",
    fontWeight: "bold",
    lineHeight: "95.6%",
    zIndex: 9,

    "&:hover": {
      color: "#FF0000"
    }
  },

  insta: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    margin: 0,
    flexDirection: "column",
    fontWeight: "bold",
    lineHeight: "95.6%",
    zIndex: 9,

    "&:hover": {
      color: "#FF0000"
    }
  },

  guys: {
    position: "absolute",
    width: "auto",
    height: "auto",
    fontWeight: "bold",
    lineHeight: "79.6%",
    zIndex: 9
  },

  circle: {
    position: "absolute",
    background: "transparent",
    width: 40,
    height: 40,
    borderRadius: 50,
    border: "2px solid #000000",
    zIndex: 2
  }
};
