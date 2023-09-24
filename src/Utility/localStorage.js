import { toast } from "react-toastify";

function getLS() {
    let storedData = localStorage.getItem("donate-id")
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];

}
function setLS(id) {
    let prevData = getLS()
    if(prevData.includes(id)){
        toast("Already Exists!!!");
        return;
    }
    prevData.push(id)
    localStorage.setItem("donate-id", JSON.stringify(prevData))
    toast("Donated succesfully")
}
export { setLS, getLS }