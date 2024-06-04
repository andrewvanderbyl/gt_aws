import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    "& .MuiFormLabel-root": {
      color: "black",
      fontWeight: "bold",
    },
  },
  toolbar: {
    backgroundColor: "#1976d2",
    borderRadius: "20px",
  },
  toolBarTitle: {
    color: "white",
  },
  dataGrid: {
    "& .super-app-theme--header": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 5px 5px",
      fontSize: "13pt",
      fontWeight: "bolder",
    },
  },
}));

export default useStyles;
