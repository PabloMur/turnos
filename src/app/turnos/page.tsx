import { FormTurno } from "@/components/Forms";
const TurnosPage = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col gap-5">
      <h2 className="text-xl font-bold">
        Ingresá tus datos, selecciona la fecha y hora que te guste y listo!
      </h2>
      <FormTurno></FormTurno>
    </div>
  );
};

export default TurnosPage;
