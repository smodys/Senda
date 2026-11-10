"use client";
export default function Community() {
    return (
    <main className="min-h-screen bg-[#F7F9F7] px-6 py-12 text-[#173D32]">
        <div className="mx-auto max-w-7xl">
             <h1 className="text-4xl font-bold tracking-tight text-[#173D32]">
                Comunidad
            </h1>
            <p className="mt-3 text-[#53675C]"> 
                Comparte tus experiencias y conecta con otras personas.
            </p>
           <form className="mt-6 space-y-4 rounded-2xl border border-[#DDE7DF] bg-white p-6 shadow-sm">
            <label htmlFor="añadirPublicacion" className="block text-sm font-semibold">
            ¿Que quieres compartir?
            </label>
            <textarea id="añadirPublicacion" rows={4} className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"/>
             <button type="submit" className="w-full rounded-lg bg-[#286B50] py-3 font-semibold text-white transition-colors hover:bg-[#173D32] focus:outline-none focus:ring-2 focus:ring-[#286B50] focus:ring-offset-2">
                Publicar
            </button>      
            </form>    
            <section className="mt-10">
                <h2 className="mb-6 text-2xl font-bold text-[#173D32]">
                    Publicaciones recientes
                </h2>
                  <article className="rounded-2xl border border-[#DDE7DF] bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1EB] font-bold text-[#286B50]">
                            U
                        </div>

                        <div>
                        <h3 className="font-bold text-[#173D32]">
                            Usuario de ejemplo
                        </h3>
                        <span className="text-sm text-[#83A995]">
                            Hace 2 horas
                        </span>
                        </div>
                    </div>
                    <p className="mt-4 leading-7 text-[#53675C]">
                        Quería compartir mi experiencia.
                    </p>
                      <div className="mt-5 flex justify-end gap-3">
                    <button type="button"
                    className="rounded-full px-5 py-2 text-sm font-semibold text-[#286B50] transition-colors hover:bg-[#E8F1EB]">
                    Me gusta
                    </button>
                    <button type="button"
                    className="rounded-full px-5 py-2 text-sm font-semibold text-[#286B50] transition-colors hover:bg-[#E8F1EB]">
                    Comentar
                    </button>
                 </div>
                </article>
            </section>
        </div>
    </main>
  );
}