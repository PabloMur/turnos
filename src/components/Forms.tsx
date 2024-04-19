"use client";
import { GetTurnoBtn } from "./ui/Buttons";
import { CustomInput, CustomTimeInput, DateInput } from "./ui/CustomInput";

export const FormTurno = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      dateAlt: { value: string };
      time: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    const date = target.dateAlt.value;
    const time = target.time.value;

    const data = {
      name,
      email,
      date,
      time,
    };

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center p-5 w-1/2 bg-zinc-800 rounded-lg shadow-lg"
    >
      <div className="w-full">
        <div className="flex justify-center items-center w-full gap-3">
          <CustomInput label="Ingresa tu nombre:" type="text" name="name" />
          <CustomInput label="Ingresa tu email:" type="email" name="email" />
        </div>
        <div className="w-full flex gap-3">
          <DateInput label="Fecha Alternativa:" name="dateAlt" />
          <CustomTimeInput label="Horario" name="time"></CustomTimeInput>
        </div>
        <GetTurnoBtn />
      </div>
    </form>
  );
};
