import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
  copyright: {
    color: "#A0A0A0",
  }
}));

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" className={classes.copyright}>
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default StickyFooter;


// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// export default function ZIndex() {
//   return (
//     <Typography
//       component="div"
//       variant="body1"
//       style={{ height: 100, width: '100%', position: 'relative' }}
//     >
//       <Box
//         bgcolor="grey.700"
//         color="white"
//         p={2}
//         position="absolute"
//         top={40}
//         left="40%"
//         zIndex="tooltip"
//       >
//         z-index tooltip
//       </Box>
//       <Box
//         bgcolor="background.paper"
//         color="text.primary"
//         p={2}
//         position="absolute"
//         top={0}
//         left="43%"
//         zIndex="modal"
//       >
//         z-index modal
//       </Box>
//     </Typography>
//   );
// }