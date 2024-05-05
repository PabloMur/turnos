import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/firebaseConn";

//por el momento esto no tiene uso, quisa mas adelante
export function GET() {
  try {
    return NextResponse.json({
      message:
        "Solicitando turno, averiguar para que podriamos usar este metodo",
    });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Error al solicitar el turno",
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { date, email, name, time } = await req.json();
    const ref = firestore.collection("dates");

    const dateTest = await ref.add({
      date,
      email,
      name,
      time,
    });

    const dateCreated = await dateTest.get();
    const dateCreatedData = dateCreated.data();

    //aca deberiamos ya enviarle la data a la base de datos, despues de hacer una serie de filtraciones
    if (dateCreatedData) {
      return NextResponse.json({
        turnoCreated: true,
        message: "Turno asignado correctamente",
      });
    } else {
      return NextResponse.json({
        turnoCreated: false,
        message: "Hubo un error al crear el turno",
      });
    }
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Error al crear un turno",
    });
  }
}
