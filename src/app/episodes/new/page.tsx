"use client";
import { useState } from "react";
export default function NewEpisode() {
  const [sintomas, setSintomas] = useState<string[]>([]);
  function cambiarSintoma(sintoma: string) {
    if (sintomas.includes(sintoma)) {
        setSintomas(sintomas.filter(s => s !== sintoma));
    } else {
        setSintomas([...sintomas, sintoma]);
    }
}
    return (
    <main className="min-h-screen bg-[#F7F9F7] px-6 py-12 text-[#173D32]">
        <div className="mx-auto max-w-2xl">
            <h1>Registro de un nuevo episodio</h1>
            <section>
                <div className="mb-6 space-y-2">
                    <label htmlFor="fecha" className="block text-sm font-semibold">
                        Fecha del episodio
                    </label>
                    <input id="fecha" type="date" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <label htmlFor="horaInicio">
                        Hora de inicio
                    </label>
                    <input id="horaInicio" type="time" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <label htmlFor="horaFin">
                        Hora de fin
                    </label>
                    <input id="horaFin" type="time" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                     <label htmlFor="intensidad">
                        Intensidad
                    </label>
                    <input id="intensidad" type="number" min={0} max={10} step={1} className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <div>
                        <label>Sintomas asociados</label>
                        <p>Síntomas seleccionados: {sintomas.join(", ")}</p>
                        <label >
                        <input id="nauseas" type="checkbox" onChange={() => cambiarSintoma("Náuseas")} checked={sintomas.includes("Náuseas")}/>Náuseas
                        </label>
                        <label >
                        <input id="sensiLuz" type="checkbox" onChange={() => cambiarSintoma("Sensibilidad a la luz")} checked={sintomas.includes("Sensibilidad a la luz")}/>Sensibilidad a la luz
                        </label>
                        <label >
                        <input id="sensiRuido" type="checkbox" onChange={() => cambiarSintoma("Sensibilidad al ruido")} checked={sintomas.includes("Sensibilidad al ruido")}/>Sensibilidad al ruido
                        </label>
                        <label >
                        <input id="mareos"type="checkbox" onChange={() => cambiarSintoma("Mareos")} checked={sintomas.includes("Mareos")}/>Mareos
                        </label>
                    </div>
                </div>

            </section>
        </div>
    </main>
  );
}