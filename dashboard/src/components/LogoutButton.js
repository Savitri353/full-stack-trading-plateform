import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3002/logout", {
        withCredentials: true,
      });

      // Redirect to frontend (port 3000)
      window.location.href = "http://localhost:3000";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button type="button" style={{backgroundColor:"white", color:"black"}} className="btn btn-light pt-1 pb-4" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
