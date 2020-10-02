import { Divider } from "antd";
import { FC } from "react";
import AuthorizedLayout from "../layout/AuthorizedLayout";

const MindNumberPage: FC = () => {
  return (
    <AuthorizedLayout>
      <div>
        <div>
          <Divider orientation="left">
            <h1>Число Разума</h1>
          </Divider>
          <p>В процессе тестирования...</p>
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default MindNumberPage;
