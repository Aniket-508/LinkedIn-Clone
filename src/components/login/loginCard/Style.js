import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    width: 360,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      border: 0,
      borderRadius: 0,
      boxShadow: "none",
    },
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    "& > img": {
      width: "auto",
      height: 35,
    },
  },

  logintext: {
    fontSize: 56,
    color: "#2977c9", 
    textAlign: "center",
    fontFamily: "Montserrat"
  },

  google: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > section": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 10px",
      "& > div": {
        flex: 1,
        height: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        opacity: 0.5,
      },
      "& > p": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10px",
        fontSize: 12,
        color: "grey",
      },
    },
  },

}));
