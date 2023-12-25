import { FLIGHTS_LIMITS } from "../../../constants";
import styles from "./Table.module.scss";
import { FC, PropsWithChildren } from "react";

interface TableProps extends PropsWithChildren {
  columns: string[];
  isLoading?: boolean;
}

export const Table: FC<TableProps> = ({ columns, isLoading, children }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array(FLIGHTS_LIMITS)
              .fill(1)
              .map((_, i) => (
                <tr className={styles.loading} key={i}>
                  <td colSpan={columns.length}>
                    <span />
                  </td>
                </tr>
              ))
          : children}
      </tbody>
    </table>
  );
};
