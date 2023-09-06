import { Button, Checkbox, Col, Form, Input, Row, } from "antd";
import Search from "antd/es/input/Search";
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

interface SearchBarProps {
    onClick: (a: string) => void;
    loading?: boolean;
}

const SearchBar = ({ onClick, loading }: SearchBarProps) => {
    const [search, setSearch] = useState<string>("");
    useEffect(() => {
        if (!search) {
            onClick("");
        };
    }, [search]);
    return (
        <Row>
            <Col flex="auto">
                <Input allowClear onChange={(e: any) => setSearch(e.target.value)} />
            </Col>
            <Col flex="120px" style={{ margin: `0px 10px` }}>
                <Button
                    loading={loading}
                    onClick={() => onClick(search)}
                    type="primary" block icon={<SearchOutlined />}>
                    Search
                </Button>
            </Col>
        </Row>
    )
}
export default SearchBar;