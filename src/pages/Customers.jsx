import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="grid"
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Delete']}
        width="auto"
        pageSettings={{ pageSize: 10 }}
        editSettings={{ allowEditing: true, allowDeleting: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item) => (
            <ColumnDirective key={item.headerText || item.type} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Edit, Filter, Page, Selection, Sort, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
