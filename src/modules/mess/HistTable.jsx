

import * as React from "react";
import { useTable } from "react-table";
import {useState,useEffect} from "react";

function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    
    const getHistBy = () => {
      fetch("http://127.0.0.1:5000/mess_hist", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hostelid: sessionStorage.getItem("key"),
        }),
      }).then((response) => {
        response.json().then((data) => {
          console.log(data)
          setData(Data)
          
        });
      });
    };
    

    getHistBy();
    }, []);
    
  const data = React.useMemo(() => Data, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "SL.NO",
        accessor: "hostel_id",
      },
      {
        Header: "MESSOUT",
        accessor: "messout_date",
      },
      {
        Header: "MESSIN",
        accessor: "messin_date",
      },
      {
        Header: "DAYS",
        accessor: "days",
      },
     
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    
      <div className="container">
        <h3>Messin and Messout History</h3>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    
  );
}

export default App;