import decode from "jwt-decode";

export default {
  saveUserToken(accessToken, accessTokenSecret, bearerToken) {
    localStorage.setItem("at", accessToken);
    localStorage.setItem("ats", accessTokenSecret);
    localStorage.setItem("bt", bearerToken);
  },

  verifyUser() {
    const token = localStorage.getItem("bt");

    if (typeof token === "undefined") {
      return false;
    }
    try {
      decode(token);
      return true;
    } catch (err) {
      return false;
    }
  },
};
