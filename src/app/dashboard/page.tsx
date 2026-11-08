import Link from "next/link";
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#173D32]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#286B50] text-lg font-bold text-white">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">
            Senda
          </span>
        </a>
      </nav>
      <section className="mx-auto max-w-7xl px-6 py-12">
     <h1 className="text-3xl font-bold">Resumen</h1>
     <h2>¡Bienvenido!</h2>
     <p className="mt-3 text-[#53675C]">Registra tus migrañas, sus posibles patrones y conecta con personas que están pasando por lo mismo que tú.</p>
     </section>
     <section className="mx-auto max-w-7xl px-6 pb-12">
     <div>
          
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#E8F1EB] p-5">
                <p className="text-xs font-medium text-[#53675C]">
                  Episodios este mes
                </p>
                <p className="mt-3 text-3xl font-bold text-[#286B50]">
                  08
                </p>
                <p className="mt-1 text-xs text-[#83A995]">
                  Ejemplo
                </p>
              </div>

              <div className="rounded-2xl bg-[#F1F5F2] p-5">
                <p className="text-xs font-medium text-[#53675C]">
                  Intensidad media
                </p>
                <p className="mt-3 text-3xl font-bold text-[#53675C]">
                  5.2<span className="text-sm">/10</span>
                </p>
                <p className="mt-1 text-xs text-[#83A995]">
                  Ejemplo
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#DDE7DF] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  Frecuencia
                </p>
                <span className="text-xs text-[#83A995]">
                  Últimos 7 días
                </span>
              </div>

              <div className="mt-7 flex h-32 items-end justify-between gap-3">
                {[35, 65, 45, 85, 30, 55, 40].map((height, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      className="w-full rounded-t-lg bg-[#83A995]"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] text-[#83A995]">
                      {["L", "M", "X", "J", "V", "S", "D"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            
              <Link href="/episodes/new" className="text-sm font-semibold">
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F1F5F2] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#286B50]">
                +
              </span>
              <div>
                  Registra nuevo episodio
                <p className="text-xs text-[#83A995]">
                  Guarda tus síntomas y hábitos
                </p>
              </div>
              </div>
              </Link>
          </div>
       
      </section>
    </main>    

  );
}
