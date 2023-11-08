import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';


import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div
      style={{ direction: "rtl" }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
    >
      <Header category="صفحه" title="مشتری" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
services={[Page, Selection, Toolbar, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
