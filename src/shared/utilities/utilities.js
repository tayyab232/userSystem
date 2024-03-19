import { globalConstants } from "../../system/constants";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const changeTableSortIcons = (columns, sortedColumn) => {
  return columns.map((col) => {
    if (col.id === sortedColumn.id) {
      if (col.sortDirection === null) {
        col.sortDirection = globalConstants.SORT.ASC;
      } else if (col.sortDirection === globalConstants.SORT.ASC) {
        col.sortDirection = globalConstants.SORT.DESC;
      } else if (col.sortDirection === globalConstants.SORT.DESC) {
        col.sortDirection = globalConstants.SORT.ASC;
      }

      return col;
    } else {
      return {
        ...col,
        sortDirection: null,
      };
    }
  });
};
export const exportToExcel = (data, columns, filename) => {
  const worksheetData = [
    columns.map((column) => column.label),
    ...data.map((row) => columns.map((column) => row[column.key])),
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const excelBlob = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });
  saveAs(excelBlob, `${filename}.xlsx`);
};
