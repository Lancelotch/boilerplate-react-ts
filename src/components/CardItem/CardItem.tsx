import React from "react";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";

interface Props {
  title: string;
  children: any;
}

const CardItem: React.FC<Props> = ({ title, children }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardItem;
