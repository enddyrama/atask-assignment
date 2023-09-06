import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    description: string;
}



const data: DataType[] = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];

const CustomTable2: React.FC = () => {
    const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
    // console.log("rex", expandedRowKeys)
    const handleAddressClick = (record: DataType) => {
        const key = record.key;
        if (expandedRowKeys.includes(key)) {
            // Close the expandable row if it's already open
            setExpandedRowKeys(expandedRowKeys.filter((key) => key !== record.key));
        } else {
            // Open the expandable row
            setExpandedRowKeys([...expandedRowKeys, key]);
        }
    };

    const columns: ColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },

        { title: 'Age', dataIndex: 'age', key: 'age' },

        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text, record) => (
                <span style={{ cursor: 'pointer', background: "Red" }} onClick={() => handleAddressClick(record)}>
                    {text}
                </span>
            ),
        },
        // Table.EXPAND_COLUMN,

    ];
    return (
        <Table
            rowKey=""
            columns={columns}
            rowSelection={{}}
            expandable={{
                expandedRowKeys,
                expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                // onExpandedRowsChange: (expandedRows) => console.log("Ex", expandedRows),
            }}
            dataSource={data}
            style={{ marginTop: 10, marginBottom: 10 }}
        />
    )
};

export default CustomTable2;