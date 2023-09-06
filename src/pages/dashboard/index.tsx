import { Button, Checkbox, Col, Form, Input, Row, } from "antd";
import Search from "antd/es/input/Search";
import { SearchOutlined } from '@ant-design/icons';
import CustomTable from "../../components/basic/table";
import { SearchBar } from "../../components/basic";
import { useDashboardHooks } from "./hooks";
import CustomTable2 from "../../components/basic/table/asuw";

const PageDashboard = () => {
    const { getApiSearch, loading, userData, contextHolder } = useDashboardHooks();
    return (
        <div>
            {
                contextHolder
            }
            <SearchBar onClick={getApiSearch} loading={loading} />
            <CustomTable loading={loading} data={userData} />
            {/* <CustomTable2/> */}
        </div>
    )
}

export default PageDashboard;