import { generatedID } from "../utils";

class UserService {
  constructor() {
    this.id = generatedID();
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: this.id,
        })
      );
    }
  }

  getId() {
    return JSON.parse(localStorage.getItem("user")).id;
  }
}

export default new UserService();
