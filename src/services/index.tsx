interface CallAPIProps {
    url: string;
    method: string;
    signal: AbortSignal;
    data?: any;
    token?: boolean;
};

export default async function callAPI({
    url,
    method,
    data,
    signal,
    token,
}: CallAPIProps) {

    let headers = {

    };

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(data),
            signal: signal
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || "An error occurred";
            const res = {
                error: true,
                message: errorMessage,
                data: null,
            };
            return res;
        }

        const responseData = await response.json();
        const { length } = Object.keys(responseData);

        const res = {
            error: false,
            message: "Success",
            data: responseData.result ? responseData.result : responseData
        };

        return res;
    } catch (error: any) {
        // console.log("err", error.message)
        const res = {
            error: true,
            message: error.message ? error.message : "Request Timed Out",
            data: null,
        };
        return res;
    }
}
