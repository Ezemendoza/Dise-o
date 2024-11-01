import { useContext } from "react"
import { UserContext } from "./UserContext/UserContext"
import { BotonesColorConFuncion } from "./Assets/Buttons"
import { Modal } from "react-bootstrap"


export const ErrorModal=()=>{
    const {expirado,texto,setExpirado}=useContext(UserContext)

    return(
        <Modal show={expirado} onHide={() => setExpirado(false)} backdrop="static" size="xl">
        <Modal.Body>
       {texto}
        </Modal.Body>
        <Modal.Footer>
          <BotonesColorConFuncion color={"red"} handle={() => setExpirado(false)} texto={"Cerrar"} />
        </Modal.Footer>
      </Modal>
    )
}