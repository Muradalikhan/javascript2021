import { CustomDialog, useDialog } from "react-st-modal";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const styled = createGlobalStyle({
  action: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 10,
  },
});

function CustomDialogContent() {
  const dialog = useDialog();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{ display: "flex", flex: 1, flexDirection: "column", padding: 20 }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.name);
        }}
        style={{ flex: 1, padding: 5, marginTop: 2 }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.email);
        }}
        style={{ flex: 1, padding: 5, marginTop: 10 }}
      />
      <div className={styled.action}>
        <button
          className="btn btn-primary"
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(name);
            console.log(dialog.close);
          }}
          style={{ flex: 1 }}
        >
          Save
        </button>
        <button
          className="btn btn-light"
          onClick={() => {
            // Сlose the dialog
            dialog.close();
          }}
          style={{ flex: 1 }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const EditModal = () => {
  return (
    <button
      className="btn btn-success"
      onClick={async () => {
        const result = await CustomDialog(<CustomDialogContent />, {
          title: "Custom Dialog",
          showCloseIcon: true,
        });
      }}
    >
      <span className="material-icons md-18">edit_note</span>
    </button>
  );
};

export default EditModal;
