import React from "react";
import { DetailsList } from "@fluentui/react";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import 'office-ui-fabric-react/dist/css/fabric.css';
 

const operations = [
    {
        from: '0000 0248 7539 4751 8476',
        to: '0000 0965 4445 6598 6578',
        amount: '$1000',
        date: '21-09-2020',
    },
    {
        from: '0000 0248 7539 4751 8476',
        to: '0000 0965 4445 6598 6578',
        amount: '$2498',
        date: '01-10-2020',
    },
    {
        from: '0000 0248 7539 4751 8476',
        to: '0000 0965 4445 6598 6578',
        amount: '$8900',
        date: '21-12-2021',
    },
    {
        from: '0000 0248 7539 4751 8476',
        to: '0000 0965 4445 6598 6578',
        amount: '$3207',
        date: '13-04-2022',
    },
];

const columns = [
    {
        key: 'column1', name: 'From', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true
    },
    {
        key: 'column2', name: 'To', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true
    },
    {
        key: 'column3', name: 'Amount', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true
    },
    {
        key: 'column4', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true
    },
];

const classNames = mergeStyleSets({
    table: {
        margin: 'auto'
    }
});

const OperationsTable = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList 
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    )
}

export default OperationsTable;