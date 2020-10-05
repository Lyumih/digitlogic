import { Skeleton } from "antd";
import React, { FC } from "react";

interface MissionNumberContentProps {
  content: {
    value: string;
  };
}

const MissionNumberContent: FC<MissionNumberContentProps> = ({
  content = {},
}) => {
  if (content)
    return (
      <div>
        <p>{content.value}</p>
      </div>
    );
  else return <Skeleton active />;
};

export default MissionNumberContent;
