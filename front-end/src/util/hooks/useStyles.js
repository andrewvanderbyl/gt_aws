import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "black", // or black
      fontWeight: "bold",
    },
  },
}));

export default useStyles;
