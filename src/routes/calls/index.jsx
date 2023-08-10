import React from 'react';
import { useEffect, useState } from "react";

//--- DATA
import axios from "axios";

//-- TABLE
import { useTable, usePagination, useSortBy } from 'react-table'


function PageName() {
  return "Calls"
}

function PageData(itemCount, itemGetter) {
  
  const [Items, setItems] = React.useState([]);

  const config = {
    headers: {
      'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
    }
  };

  const client = axios.create({
    baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + itemGetter
  });

  React.useEffect(() => {
    client.get('?limit=' + itemCount, config)
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  return Items

}

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
  )

  return (
    <>
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span></th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button className="btn btn-outline-dark" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button className="btn btn-outline-dark" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button className="btn btn-outline-dark" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button className="btn btn-outline-dark px-2" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}

        <div className="btn align-baseline">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </div>
        <div className="btn align-baseline">
          {' '} Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '75px' }}
          />
        </div>{' '}Records per page: {' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

function TableColumns() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'callDate',
      },
      {
        Header: 'Time',
        accessor: 'callTime',
      },
      {
        Header: 'Responding Agency',
        accessor: 'agency',
      },
      {
        Header: 'Incident',
        accessor: 'incidentType',
      },
      {
        Header: 'Location',
        accessor: 'location',
      }
    ],
    []
  )
  return columns
}

export default function CallsPage() {

  var tableColumns = TableColumns();
  var tableData = PageData(100, "getAllCalls");

  return (
    <div className="container-xl">
      <h1 className="display-6"><PageName /></h1>

     <div className="card">
     <div className="card-header">
       Data
     </div>
     <div className="card-body">
       <Table columns={tableColumns} data={tableData} />
     </div>
   </div>
 </div>


  )
}


