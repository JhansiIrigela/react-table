import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter
  },
  {
    Header: "First Name",
    Footer: "First Name",

    accessor: "first_name",
    Filter: ColumnFilter

  },
  {
    Header: "Last Name",
    Footer: "Last Name",

    accessor: "last_name",
    Filter: ColumnFilter

  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",

    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    Filter: ColumnFilter

  },
  {
    Header: "Country",
    Footer: "Country",

    accessor: "country",
    Filter: ColumnFilter

  },
  {
    Header: "Phone ",
    Footer: "Phone",

    accessor: "phone",
    Filter: ColumnFilter

  },
];

// FOR GROUPING PURPOSE

// export const GROUPED_COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "Full Name",
//     Footer: "Full Name",
//     //use columns here instead of using accessor for grouping purposes
//     columns: [
//       {
//         Header: "First Name",
//         Footer: "First Name",

//         accessor: "first_name",
//       },
//       {
//         Header: "Last Name",
//         Footer: "Last Name",

//         accessor: "last_name",
//       },
//     ],
//   },
//   {
//     Header: "Information",
//     Footer: "Information",
//     //use columns here instead of using accessor for grouping purposes
//     columns: [
//       {
//         Header: "Date of Birth",
//         Footer: "Date of Birth",

//         accessor: "date_of_birth",
//       },
//       {
//         Header: "Country",
//         Footer: "Country",

//         accessor: "country",
//       },
//       {
//         Header: "Phone ",
//         Footer: "Phone",

//         accessor: "phone",
//       },
//     ],
//   },
// ];
