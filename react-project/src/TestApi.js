import axios from "axios";
import { useEffect } from "react";
import { getSession, auth } from "../src/api/auth";
import { API_URL } from "../src/api/config";


export default function TestApi() {

    const getApi = async () => {
        // TODO: answer here
        try {
            // await axios.get("https://rg-km.riegan.my.id/api/auth/session", { withCredentials: true })
            //   .then((res) => {
            //     console.log(res)
            //   }).catch((err) => {
            //     console.log(err);
            //   })

            // const response2 = getSession();
            // response2.then((res) => {
            //     console.log((res.data))
            // }).catch((err) => {
            //     console.log(err);
            // })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApi();
    }, [])


}


