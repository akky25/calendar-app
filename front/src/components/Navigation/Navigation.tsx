import { FC } from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import dayjs from "dayjs";

type Props = {
  setNextMonth: () => void;
  setPreviousMonth: () => void;
  setMonth: (dayObj: dayjs.Dayjs | null) => void;
  month: dayjs.Dayjs | null;
};

const useStyledToolbar = makeStyles({
  root: { padding: "0" },
});

const useStyledTypography = makeStyles({
  root: { margin: "0 30px 0 10px" },
});

const useStyledDatePicker = makeStyles({
  root: { marginLeft: 30 },
});

const useStyledButton = makeStyles({
  root: { color: "black" },
});

const Navigation: FC<Props> = ({
  setNextMonth,
  setPreviousMonth,
  setMonth,
  month,
}) => {
  const classesToolbar = useStyledToolbar();
  const classesTypography = useStyledTypography();
  const classesDatePicker = useStyledDatePicker();

  const classesButton = useStyledButton();

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
      <DatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
        className={classesDatePicker.root}
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        // className={classesButton.root}
        // classes={{ root: classesButton.root }}
        classes={{ label: classesButton.root }}
      >
        Primary
      </Button>
    </Toolbar>
  );
};

export default Navigation;
