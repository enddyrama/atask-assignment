import React, { useState } from 'react';
import { Avatar, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserSearchType } from '../../../types/response/dashboard';
import { ExpandedRow } from './components/ExpandedRow';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';



export interface CustomTableProps {
    data: UserSearchType[];
    loading?: boolean;
}

const CustomTable = ({ loading, data }: CustomTableProps) => {
    const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
    const handleRowExpand = (id: number) => {

        if (expandedRowKeys.includes(id)) {
            // Close the expandable row if it's already open
            setExpandedRowKeys(expandedRowKeys.filter((key) => key !== id));

        } else {
            // Open the expandable row
            setExpandedRowKeys([...expandedRowKeys, id]);
        }
    };


    const columns: ColumnsType<UserSearchType> = [
        {
            title: 'Name', dataIndex: 'login', key: 'login',
            render: (text, record, index) => (
                <div key={index}
                    onClick={() => window.open(record.html_url)}
                    style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}>
                    <Avatar size={62} src={record.avatar_url} />
                    <div style={{ marginLeft: 10 }}>
                        <div style={{ fontWeight: 600, fontSize: 18 }}>
                            {text}
                        </div>
                        <div style={{ marginTop: 5 }}>
                            {record.type}
                        </div>
                    </div>
                </div>

            ),
        },

        {
            title: 'Url', dataIndex: 'html_url', key: 'html_url', className: 'url-column',
        },

        {
            title: 'Action', dataIndex: 'address', key: 'address', align: "center",
            render: (text, record, index) => (
                <Tooltip placement="topLeft" title={`Click to  ${expandedRowKeys.includes(record.key) ? "hide" : "show"} Repository`} key={index}>
                    {
                        expandedRowKeys.includes(record.key) ?
                            <CaretUpOutlined style={{ cursor: 'pointer' }} onClick={() => handleRowExpand(record.key)} />
                            :
                            <CaretDownOutlined style={{ cursor: 'pointer' }} onClick={() => handleRowExpand(record.key)} />

                    }

                </Tooltip>
            ),
        },
        // Table.EXPAND_COLUMN,
    ];

    return (
        <Table
            columns={columns}
            scroll={{ x: true }}
            expandable={{
                expandedRowKeys,
                expandedRowRender: (record) => (
                    <div style={{ margin: 0 }}>
                        <ExpandedRow user={record.login} />
                    </div>
                ),
                expandIconColumnIndex: -1, // Hide the expandable button
                // onExpand: (expanded, record) => handleRowExpand(record.id), // Uncomment this line
                // onExpandedRowsChange: (expandedRows) => console.log("Ex", expandedRows), // Uncomment this line
            }}
            dataSource={data}
            style={{ marginTop: 10, marginBottom: 10 }}
            loading={loading}
            className="custom-table"
        />
    );
};

export default CustomTable;
