import { useEffect, useState } from "react";
import { getSearchDashboard } from "../../services/dashboard"
import { UserSearchType } from "../../types/response/dashboard";
import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const useDashboardHooks = () => {
    const abortController = new AbortController();
    const [userData, setUserdata] = useState<UserSearchType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, message: string) => {
        api[type]({
            message: 'Error',
            description:
                message,
        });
    };


    const getApiSearch = async (search: string) => {
        setLoading(true);
        if (search) {
            const response = await getSearchDashboard(search, abortController.signal);
            if (!response.error) {
                const itemsWithKey = response.data.items.map((item: UserSearchType) => ({
                    ...item,
                    key: item.id
                }));
                setUserdata(itemsWithKey);
                setLoading(false);
            } else {
                setLoading(false);
                openNotificationWithIcon('error', response.message)
            }
        } else {
            setUserdata([]);
            setLoading(false);
        }

    };



    return {
        getApiSearch,
        userData,
        loading,
        contextHolder
    }
}