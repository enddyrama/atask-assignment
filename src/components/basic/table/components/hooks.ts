import { useEffect, useState } from "react";
import { UserRepoType } from "../../../../types/response/dashboard";
import { getRepo } from "../../../../services/dashboard";
import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const useExpandedRowHooks = (user: string) => {
    const abortController = new AbortController();
    const [repos, setRepos] = useState<UserRepoType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, message: string) => {
        api[type]({
            message: 'Error',
            description:
                message,
        });
    };

    const fetchRepo = async () => {
        setLoading(true);
        const response = await getRepo(user, page, perPage, abortController.signal);
        // console.log("Respins", response)
        if (!response.error) {
            const newRepos = response.data;
            setRepos([...repos, ...newRepos]);
            setPage(page + 1);
            if (newRepos.length < perPage) {
                setPerPage(0);
            }
            setLoading(false);
        } else {
            setLoading(false);
            openNotificationWithIcon('error', response.message)
        }
    };

    const fetchMoreRepo = async () => {
        setLoadingMore(true);
        const response = await getRepo(user, page, perPage, abortController.signal);
        // console.log("Respins", response)
        if (!response.error) {
            const newRepos = response.data;
            setRepos([...repos, ...newRepos]);
            setPage(page + 1);
            if (newRepos.length < perPage) {
                setPerPage(0);
            }
            setLoadingMore(false);
        } else {
            setLoadingMore(false);
            openNotificationWithIcon('error', response.message)
        }
    };

    useEffect(() => {
        if (user) {
            fetchRepo();
        }
        return () => {
            // abortController.abort();
        };
    }, [user]);
    return {
        repos,
        perPage,
        loading,
        fetchRepo,
        fetchMoreRepo,
        loadingMore, contextHolder
    }
};