
const REST_API_KEY = "9fd6d9d615c25ff01b60a3a988e942bc";
const REDIRECT_URL = "http://127.0.0.1:5173";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;