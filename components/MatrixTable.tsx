import { Table } from "antd";
import { FC } from "react";

export interface Matrix {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
}

interface MatrixTableProps {
  matrix: Matrix;
}

const MatrixTable: FC<MatrixTableProps> = ({ matrix }) => {
  const columns = [
    {
      title: "",
      dataIndex: "321",
      key: "321",
    },
    {
      title: "",
      dataIndex: "654",
      key: "654",
    },
    {
      title: "",
      dataIndex: "987",
      key: "987",
    },
  ];

  const dataSource = [
    {
      key: "1",
      321: "3".repeat(matrix[3]),
      654: "6".repeat(matrix[6]),
      987: "9".repeat(matrix[9]),
    },
    {
      key: "2",
      321: "2".repeat(matrix[2]),
      654: "5".repeat(matrix[5]),
      987: "8".repeat(matrix[8]),
    },
    {
      key: "3",
      321: "1".repeat(matrix[1]),
      654: "4".repeat(matrix[4]),
      987: "7".repeat(matrix[7]),
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

export default MatrixTable;
