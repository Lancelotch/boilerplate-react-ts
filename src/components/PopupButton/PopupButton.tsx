import React from "react";
import { Card, Popover, Button, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  id: string;
  onSelected: (id: string) => void;
  open: boolean | false;
  anchorEl: any;
  onClose: () => void;
  loading?: boolean;
}

const PopupButton: React.FC<Props> = ({
  id,
  onSelected,
  open,
  anchorEl,
  onClose,
  loading = false,
}) => {
  const classes = useStyles();
  const handleSelected = (id: string) => {
    onSelected(id);
  };

  return (
    <Popover
      //className={classes.popOver}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      onClose={onClose}
    >
      <Card className={classes.card}>
        <Button
          onClick={() => handleSelected(id)}
          variant="text"
          color="primary"
          disabled={loading}
          endIcon={loading ? <CircularProgress size={20} /> : null}
        >
          Detail Job
        </Button>
        {/* <ListMenu onSelected={handleSelected} menus={menus} /> */}
      </Card>
    </Popover>
  );
};

export default PopupButton;
