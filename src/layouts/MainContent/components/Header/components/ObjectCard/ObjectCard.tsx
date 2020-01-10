import React from "react";
import { Card, Popper, Grow, Grid } from "@material-ui/core";

interface Props {
  onSubmit: () => void;
}

const ObjectCard: React.FC<Props> = ({ onSubmit }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              tests
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};
