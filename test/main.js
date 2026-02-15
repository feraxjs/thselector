import { th, init_dropdown } from "@feraxjs/thselector";

document.getElementById("init_dropdown").addEventListener(
  "click", () => {
    let selection = document.createElement("select");
    selection.id = "fth-select";
    document.getElementById("dropdown").appendChild(selection);
    init_dropdown();
  }
)
