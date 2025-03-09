import { Platform } from "react-native";

import Config from "../../config.json";

export const IsAndroid = Platform.OS === "android";

export const api_call = async(url: string) => {
    const _url =  `${Config.octokit.base_url}${url}`;
    const response = await fetch(_url, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: Config.octokit.auth
        }
    });
    return await response.json();
};
