import { atom } from "recoil";

export const userSate = atom({
  key: "userState",
  default: { isAdmin: false }
});
