import { FormLoginAdmin } from "@/components/Forms";

const AdminPage = () => {
  return (
    <div className="bg-orange-400 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-black w-full h-full">
        <FormLoginAdmin></FormLoginAdmin>
      </div>
    </div>
  );
};

export default AdminPage;
