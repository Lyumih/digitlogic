import { Divider } from "antd";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import MindNumberContent, {
  MindNumberContentProps,
} from "../components/MindNumberContent";
import MissionNumberContent from "../components/MissionContent";
import { API_URL_BASE, setSitename } from "../constants";
import AuthorizedLayout from "../layout/AuthorizedLayout";

const MindNumberPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [mindNumber, setMindNumber] = useState("");
  const [mindNumberContent, setMindNumberContent] = useState<any>(null);

  const [missionNumber, setMissionNumber] = useState("");
  const [missionNumberContent, setMissionNumberContent] = useState<any>(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(`${API_URL_BASE}/services/mindNumber`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.message === "Success!") {
            const keyMindNumber = Object.keys(data.result.mindNumber)[0];
            setMindNumber(keyMindNumber);
            setMindNumberContent(data.result.mindNumber[keyMindNumber]);
            console.log(mindNumberContent);

            const keyMissionNumber = Object.keys(data.result.missionNumber)[0];
            setMissionNumber(keyMissionNumber);
            setMissionNumberContent(
              data.result.missionNumber[keyMissionNumber]
            );
            console.log(missionNumberContent);

            // setBirthday(data.result.birthDate);
            // setMatrix(data.result.matrix);
            // setMatrixDescriptions(Object.entries(data.result.result));
          }
        });
    }
  }, []);

  return (
    <AuthorizedLayout>
      <Head>
        <title>{setSitename("Число разума")}</title>
      </Head>
      <div>
        <div>
          <Divider orientation="left">
            <h1>Число Разума {mindNumber}</h1>
          </Divider>
          <MindNumberContent
            mindNumber={mindNumber}
            content={mindNumberContent}
          />
        </div>
        <div>
          <Divider orientation="left">
            <h1>Число Миссии {missionNumber}</h1>
          </Divider>
          <MissionNumberContent content={missionNumberContent} />
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default MindNumberPage;
