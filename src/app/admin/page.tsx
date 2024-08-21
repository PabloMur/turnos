import { FormLoginAdmin } from "@/components/Forms";
import { AdminDashboard } from "@/components/AdminDashboard";

const AdminPage = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="bg-black w-full h-full">
        <FormLoginAdmin></FormLoginAdmin>
        <AdminDashboard></AdminDashboard>
      </div>
    </div>
  );
};

export default AdminPage;
