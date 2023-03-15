import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="grid"
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        width="auto"
        pageSettings={{ pageSize: 10 }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item) => (
            <ColumnDirective key={item.headerText} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
