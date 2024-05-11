"use client";
import { useUserIsLogged } from "@/hooks";
import { GetTurnoBtn } from "./ui/Buttons";
import {
  CustomInput,
  CustomTimeInput,
  CustomTimeInputTest,
  DateInput,
} from "./ui/CustomInput";

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
          <CustomInput
            label="Ingresa tu nombre:"
            type="text"
            name="name"
            required={true}
          />
          <CustomInput
            label="Ingresa tu email:"
            type="email"
            name="email"
            required={true}
          />
        </div>
        <div className="w-full flex gap-3">
          <DateInput label="Fecha Alternativa:" name="dateAlt" />
          <CustomTimeInput label="Horario" name="time"></CustomTimeInput>
          <CustomTimeInputTest
            label={""}
            name={""}
            availableHours={["09:00", "09:30", "10:00", "10:30", "11:00"]}
          ></CustomTimeInputTest>
        </div>
        <GetTurnoBtn />
      </div>
    </form>
  );
};

export const FormLoginAdmin = () => {
  const userStatus = useUserIsLogged();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("yo se que voy a lograr grandes cosas con la programacion");
    alert("hola");
  };

  return (
    !userStatus && (
      <div className="h-full  flex justify-center items-center p-4">
        <div className="bg-[#18181b] rounded p-4 h-3/4 w-1/3 flex flex-col justify-between">
          <form onSubmit={handleSubmit}>
            <CustomInput
              name="email"
              type="email"
              label="Ingresa tu email:"
              required={true}
            ></CustomInput>
            <CustomInput
              name="password"
              type="password"
              label="Contraseña:"
              required={true}
            ></CustomInput>
            <button className="bg-lime-400 p-2 rounded-lg w-full text-black font-bold mt-4">
              ingresar
            </button>
          </form>
          <div className="h-[1px] w-2/3 bg-white m-auto"></div>
          <form>
            <p>
              Aca tiene que estar la opcion tradicional y la de logueo con
              google creo, hayq que ver cual es la opcion mas segura, o sino la
              que te envia un codigo al email.
            </p>
          </form>
        </div>
      </div>
    )
  );
};
