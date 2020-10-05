import { Divider, List, Skeleton } from "antd";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import MatrixTable, { Matrix } from "../components/MatrixTable";
import { API_URL_BASE, setSitename } from "../constants";
import AuthorizedLayout from "../layout/AuthorizedLayout";

const MatrixPage: FC = () => {
  useEffect(() => {
    console.log("PIFA");
  });
  const [birthday, setBirthday] = useState("");
  const [matrix, setMatrix] = useState<Matrix>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });
  const [matrixDescriptions, setMatrixDescriptions] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(`${API_URL_BASE}/services/lifeMatrix`, {
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
            setBirthday(data.result.birthDate);
            setMatrix(data.result.matrix);
            setMatrixDescriptions(Object.entries(data.result.result));
          }
        });
    }
  }, []);

  return (
    <AuthorizedLayout>
      <Head>
        <title>{setSitename("Матрица")}</title>
      </Head>
      <div>
        <div>
          <Divider orientation="left">
            <h1>Матрица</h1>
          </Divider>
          <p>Дата рождения: {birthday}</p>
          <MatrixTable matrix={matrix} />
        </div>
        <div>
          <Divider orientation="left">
            <h1>Сферы</h1>
          </Divider>
          {matrixDescriptions.length > 0 ? (
            <List
              dataSource={matrixDescriptions}
              renderItem={(item) => (
                <List.Item>
                  <h2>{item[0]}</h2>
                  {item[1]}
                </List.Item>
              )}
            />
          ) : (
            <>
              <Skeleton active />
              <Skeleton active />
            </>
          )}
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default MatrixPage;
