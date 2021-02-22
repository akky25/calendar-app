import { FC } from "react";
import { IconButton, Toolbar, Typography, makeStyles } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

type Props = {
  setNextMonth: () => void;
  setPreviousMonth: () => void;
};

const useStyledToolbar = makeStyles({
  root: { padding: "0" },
});

const useStyledTypography = makeStyles({
  root: { margin: "0 30px 0 10px" },
});

const Navigation: FC<Props> = ({ setNextMonth, setPreviousMonth }) => {
  const classesToolbar = useStyledToolbar();
  const classesTypography = useStyledTypography();

  return (
    <Toolbar className={classesToolbar.root}>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" alt="" />
      <Typography
        color="textSecondary"
        variant="h5"
        className={classesTypography.root}
      >
        カレンダー
      </Typography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};

export default Navigation;
