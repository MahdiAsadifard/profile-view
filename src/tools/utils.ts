import { Platform } from "react-native";

import Config from "../../config.json";

export const IsAndroid = Platform.OS === "android";

export const GetByUsername = async (username: string) => {
    const response= await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: Config.octokit.auth
        }
    });
    return await response.json();
};