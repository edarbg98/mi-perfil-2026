import { Navigate, Outlet} from "react-router-dom";

interface Props {
    permiso: boolean
}

const Seguridad = ({permiso}:Props) => {
    if (permiso) {
        return <Outlet/>
    } else {
        return <Navigate to={"/login"} replace />
    }
}

export default Seguridad;