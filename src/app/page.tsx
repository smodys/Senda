
const features = [
  {
    number: "01",
    title: "Registra tus migrañas",
    description:
      "Registra cada episodio, su duración, intensidad, localización y síntomas asociados.",
    icon: "◷",
  },
  {
    number: "02",
    title: "Guarda las estadísticas",
    description:
      "Consulta estadísticas y descubre qué factores aparecen relacionados con tus episodios.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Comparte y ayuda a otros",
    description:
      "Conecta con otras personas, comparte experiencias y aprende de la comunidad.",
    icon: "◎",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#173D32]">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#286B50] text-lg font-bold text-white">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">
            Senda
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden text-sm font-semibold text-[#53675C] transition hover:text-[#286B50] sm:block"
          >
            Inicio sesión
          </a>
          <a
            href="/register"
            className="rounded-xl bg-[#286B50] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F563F]"
          >
            Registro
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 md:grid-cols-2 md:pb-32 md:pt-28"
      >
        <div>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl">
            Para reducir las migrañas
            <span className="text-[#286B50]">
              {" "}primero hay que comprenderlas
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#53675C]">
            Registra tus migrañas, sus posibles patrones y conecta con personas que están pasando por lo mismo que tú.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/register"
              className="rounded-xl bg-[#286B50] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#286B50]/15 transition hover:-translate-y-0.5 hover:bg-[#1F563F]"
            >
              Registra un nuevo episodio →
            </a>

            <a
              href="#features"
              className="rounded-xl border border-[#DDE7DF] bg-white px-7 py-4 text-sm font-semibold text-[#53675C] transition hover:border-[#286B50]"
            >
              Descubre más
            </a>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[40px] bg-[#286B50]/5 blur-3xl" />

          <div className="relative rounded-3xl border border-[#DDE7DF] bg-white p-7 shadow-xl shadow-[#173D32]/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#83A995]">
                  Resumen
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  ¡Bienvenido!
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1EB] text-lg">
                ☺
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
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

            <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F1F5F2] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#286B50]">
                +
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Registra nuevo episodio
                </p>
                <p className="text-xs text-[#83A995]">
                  Guarda tus síntomas y hábitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-t border-[#DDE7DF] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#286B50]">
              Todo en un mismo lugar
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Conoce mejor tu cuerpo
            </h2>

            <p className="mt-5 leading-7 text-[#53675C]">
              Un espacio seguro donde registrar tus síntomas, compartir tus experiencias con otros, ayudar y ser ayudado.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-[#DDE7DF] bg-[#F7F9F7] p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#173D32]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F1EB] text-2xl text-[#286B50]">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#83A995]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#53675C]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#DDE7DF] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#83A995] sm:flex-row">
          <span className="font-bold text-[#286B50]">
            Senda
          </span>
          <span>
            Conoce mejor tus síntomas
          </span>
        </div>
      </footer>
    </main>
  );
}
