import { Confirm } from "react-st-modal";
// -------------------------------------------
import { db } from "../../config/firebase";
import { ref, remove } from "firebase/database";
// -------------------------------------------

const ConfirmModal = ({ id }) => {
  const deleteUser = (id) => {
    const refrence = ref(db, "users/" + id);
    remove(refrence);
  };

  return (
    <button
      className="btn btn-danger mx-2"
      onClick={async () => {
        const result = await Confirm(
          "Are you sure you want to delete this ?",
          "Сonfirmation Alert"
        );

        if (result) {
          // Сonfirmation confirmed
          deleteUser(id);
        } else {
          // Сonfirmation not confirmed
          console.log("not confirmed");
        }
      }}
    >
      <span className="material-icons md-18">delete</span>
    </button>
  );
};

export default ConfirmModal;
