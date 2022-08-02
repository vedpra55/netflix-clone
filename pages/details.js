import Navbar from "../components/navbar";
import Image from "next/image";
import { useAuthContext } from "../context/userContext";

export default function Details() {
  const { email, handleLogOutBtn } = useAuthContext();
  return (
    <div>
      <Navbar email={email} handleLogOutBtn={handleLogOutBtn} />
    </div>
  );
}
