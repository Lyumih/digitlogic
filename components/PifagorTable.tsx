import { Table } from "antd";
import { FC } from "react";

interface PifagorTableProps {}

const PifagorTable: FC<PifagorTableProps> = () => {
  const columns = [
    {
      title: "",
      dataIndex: "first",
      key: "first",
    },
    {
      title: "",
      dataIndex: "second",
      key: "second",
    },
    {
      title: "",
      dataIndex: "third",
      key: "third",
    },
  ];
  const dataSource = [
    {
      key: "1",
      first: "3",
      second: "6 6",
      third: "9 99",
    },
    {
      key: "2",
      first: "2 2",
      second: "5",
      third: "8",
    },
    {
      key: "3",
      first: "1 1",
      second: "4 4",
      third: "7",
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      showHeader={false}
      columns={columns}
      pagination={false}
      bordered={true}
    ></Table>
  );
};

export default PifagorTable;
