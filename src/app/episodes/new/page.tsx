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
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-[#173D32] sm:text-4xl">Registro de un nuevo episodio</h1>
            <section>
                <div className="mb-6 space-y-2">
                    <label htmlFor="fecha" className="block text-sm font-semibold">
                        Fecha del episodio
                    </label>
                    <input id="fecha" type="date" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <label htmlFor="horaInicio "className="block text-sm font-semibold">
                        Hora de inicio
                    </label>
                    <input id="horaInicio" type="time" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <label htmlFor="horaFin" className="block text-sm font-semibold">
                        Hora de fin
                    </label>
                    <input id="horaFin" type="time" className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                     <label htmlFor="intensidad" className="block text-sm font-semibold">
                        Intensidad
                    </label>
                    <input id="intensidad" type="number" min={0} max={10} step={1} className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
                    <div className="flex flex-col gap-3">
                        <label className="block text-sm font-semibold">Sintomas asociados</label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#DDE7DF] bg-white p-3 transition-colors hover:bg-[#E8F1EB]" >
                        <input id="nauseas"  type="checkbox" className="h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-[#DDE7DF] bg-white transition-all checked:border-[#286B50] checked:bg-[#286B50] checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22%3E%3Cpath d=%22m3 8 3 3 7-7%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat focus:outline-none focus:ring-2 focus:ring-[#286B50]/20" onChange={() => cambiarSintoma("Náuseas")} checked={sintomas.includes("Náuseas")}/>Náuseas
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#DDE7DF] bg-white p-3 transition-colors hover:bg-[#E8F1EB]">
                        <input id="sensiLuz" type="checkbox" className="h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-[#DDE7DF] bg-white transition-all checked:border-[#286B50] checked:bg-[#286B50] checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22%3E%3Cpath d=%22m3 8 3 3 7-7%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat focus:outline-none focus:ring-2 focus:ring-[#286B50]/20" onChange={() => cambiarSintoma("Sensibilidad a la luz")} checked={sintomas.includes("Sensibilidad a la luz")}/>Sensibilidad a la luz
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#DDE7DF] bg-white p-3 transition-colors hover:bg-[#E8F1EB]">
                        <input id="sensiRuido" type="checkbox" className="h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-[#DDE7DF] bg-white transition-all checked:border-[#286B50] checked:bg-[#286B50] checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22%3E%3Cpath d=%22m3 8 3 3 7-7%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat focus:outline-none focus:ring-2 focus:ring-[#286B50]/20" onChange={() => cambiarSintoma("Sensibilidad al ruido")} checked={sintomas.includes("Sensibilidad al ruido")}/>Sensibilidad al ruido
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#DDE7DF] bg-white p-3 transition-colors hover:bg-[#E8F1EB]">
                        <input id="mareos"type="checkbox" className="h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-[#DDE7DF] bg-white transition-all checked:border-[#286B50] checked:bg-[#286B50] checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22%3E%3Cpath d=%22m3 8 3 3 7-7%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat focus:outline-none focus:ring-2 focus:ring-[#286B50]/20" onChange={() => cambiarSintoma("Mareos")} checked={sintomas.includes("Mareos")}/>Mareos
                        </label> 
                        <p>Síntomas seleccionados: {sintomas.join(", ")}</p>

                    </div>
                </div>

            </section>
        </div>
    </main>
  );
}