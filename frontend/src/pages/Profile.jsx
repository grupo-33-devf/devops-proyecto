import { Button } from "@mui/material";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h3>Profile</h3>
      <Button variant="contained" onClick={logout} color="error">
        Cerrar sesión
      </Button>
    </div>
  );
};

export default Profile;
