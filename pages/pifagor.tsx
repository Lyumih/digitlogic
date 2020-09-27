import { Divider, List, Typography } from "antd";
import { Container } from "next/app";
import { FC } from "react";
import PifagorTable from "../components/PifagorTable";
import MainLayout from "../layout/MainLayout";

const PifagorPage: FC = () => {
  const data = [
    `Обратите внимание на здоровье.
    Вам необходимо наработать энергию анализа.`,
    "Вы наделены способностью принимать решения и умением. Вам необходимо наработать внутреннюю энергию кундалини.",
    `Вы от природы чувствуете людей, но для того чтобы найти общий язык с ними вам необходимо понять.
    Вам необходимо наработать энергию коммуникации, опыта и трудолюбия.
    `,
    `Вам от природы дана внутренняя удовлетворённость жизнью и вы кожей чувствуете результат. `,
    `Вам от природы дано ощущение своего энергоресурса.`,
    `У вас есть связь с родом, после того, как вы поставили цель и что-то.`,
    `Все цели которые вы ставите требуют достаточного количества усилий и времени.
    Вам необходимо наработать энергию опыта и трудолюбия.
    `,
    `У вас есть ощущение законченности результата, но это не всегда так.
    Вам необходимо наработать энергию анализа.
    `,
    `Успех – это легкое достижение поставленных целей и общественное признание ваших результатов.
    Обратите внимание, не умение
    Вам необходимо наработать энергию анализа, коммуникации и внутреннюю энергию кундалини.
    `,
    `Коммуникации – это взаимодействие с социумом. А социум – это наше все. Через него приходят возможности во все сферы жизни (финансы, семья, друзья и т.д). С их помощью люди обмениваются информацией, опытом, способностями, товарами, услугами и финансами. 
    Обратите внимание
    Вам необходимо наработать энергию коммуникации.
    `,
    `Обратите внимание на то, что недостаточно
    Вам необходимо наработать энергию кундалини, опыта и трудолюбия.
    `,
    `Эмоциональный интеллект — это способность человека распознавать эмоции, понимать намерения, мотивацию и желания других людей и свои собственные, а также способность управлять своими эмоциями и эмоциями других людей в целях решения практических задач.
    Вам необходимо научиться правильно
    Вам необходимо наработать энергию коммуникации.
    `,
  ];

  return (
    <MainLayout>
      <div style={{ padding: "2rem" }}>
        <h1>Цифрологии 21 века</h1>
        <div>
          <Divider orientation="left">Дата рождения</Divider>
          02.04.1996
        </div>

        <div>
          <Divider orientation="left">Матрица</Divider>
          <PifagorTable />
        </div>
        <div>
          <Divider orientation="left">Сферы</Divider>
          <List
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          ></List>
        </div>
      </div>
    </MainLayout>
  );
};

export default PifagorPage;
