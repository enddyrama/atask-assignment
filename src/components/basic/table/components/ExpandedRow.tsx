import { Button, Card, Spin } from "antd";
import { UserRepoType } from "../../../../types/response/dashboard";
import { useExpandedRowHooks } from "./hooks";
import { StarOutlined } from '@ant-design/icons';


export interface ExpandedRowProps {
    user: string;
}

export const ExpandedRow = ({ user }: ExpandedRowProps) => {
    const { repos, loading, loadingMore, perPage, fetchMoreRepo, contextHolder } = useExpandedRowHooks(user);
    return (
        <div>
            {
                contextHolder
            }
            <div>
                {
                    loading ?
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Spin />
                        </div>
                        :
                        repos && repos.length > 0 ?
                            repos.map((repo: UserRepoType, index: number) => {
                                // console.log("repo", repo)
                                return (
                                    <Card
                                        key={index}
                                        extra={
                                            <div style={{ display: "flex" }}>
                                                <StarOutlined style={{ marginRight: 5 }} />
                                                <div>{repo.stargazers_count}</div>
                                            </div>}
                                        onClick={() => window.open(repo.html_url)}
                                        hoverable title={repo.name} bordered={false}
                                        style={{ marginBottom: 10 }}>
                                        <div>{repo.description ? repo.description : "No Description Available"}</div>
                                    </Card>
                                )
                            })
                            :
                            <div>
                                No Repo Available
                            </div>
                }
            </div>
            {!loading && perPage > 0 && repos.length > 0 ? (
                <Button loading={loadingMore} block onClick={fetchMoreRepo}>
                    {
                        loadingMore ? "Loading" : "Show More"
                    }
                </Button>
            )
                :
                null
            }

        </div>
    )
}