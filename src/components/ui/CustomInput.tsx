type InputType = {
  type: string;
  label: string;
  name: string;
};

type DateInputProps = {
  label: string;
  name: string;
};
export const CustomInput = ({ type, label, name }: InputType) => {
  return (
    <label className="w-full">
      <p className="font-bold">{label}</p>
      <input
        type={type}
        className="text-black w-full rounded-lg p-2 my-1"
        name={name}
      />
    </label>
  );
};

export const DateInput: React.FC<DateInputProps> = ({ label, name }) => {
  const currentDate = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

  // Función para verificar si una fecha es domingo
  const esDomingo = (fecha: string): boolean => {
    const diaSemana = new Date(fecha).getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábadoc
    return diaSemana === 6; // Devuelve true si es domingo, false en caso contrario
  };

  // Función para manejar el cambio de fecha
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (esDomingo(selectedDate)) {
      e.target.value = ""; // Limpiar el valor si la fecha seleccionada es domingo
      alert(
        "No se pueden sacar turnos los domingos. Por favor elige otra fecha."
      );
    }
  };

  return (
    <label className="w-full">
      <p className="font-bold">{label}</p>
      <input
        type="date"
        className="text-black w-full rounded-lg p-2 my-1"
        name={name}
        min={currentDate} // Establece la fecha mínima como la fecha actual
        onChange={handleDateChange} // Maneja el evento onChange para validar la fecha
      />
    </label>
  );
};

//este en realidad deberia solamente mostrar las horas que estan disoponibles
export const CustomTimeInput = ({ label, name }: any) => {
  // Generar las opciones de hora en intervalos de 30 minutos
  const generarOpcionesDeHora = () => {
    const horas = [];
    for (let hora = 9; hora <= 20; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 30) {
        const horaFormateada = `${hora.toString().padStart(2, "0")}:${minuto
          .toString()
          .padStart(2, "0")}`;
        horas.push(horaFormateada);
      }
    }
    return horas;
  };

  const handleInputChange = (e: any) => {
    const valorSeleccionado = e.target.value;
    console.log("Hora seleccionada:", valorSeleccionado);
  };

  return (
    <label htmlFor={name} className="font-bold text-black w-full">
      <p>{label}</p>
      <select
        name={name}
        id={name}
        onChange={handleInputChange}
        className="block w-full mt-1 p-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
      >
        {generarOpcionesDeHora().map((hora) => (
          <option key={hora} value={hora}>
            {hora}
          </option>
        ))}
      </select>
    </label>
  );
};
