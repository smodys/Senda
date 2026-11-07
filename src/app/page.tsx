
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
    <main className="min-h-screen bg-[#F8FAFD] text-[#17243A]">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#426FE5] text-lg font-bold text-white">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">
            Senda
          </span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-[#64748B] md:flex">
          <a href="#features" className="transition hover:text-[#426FE5]">
            Features
          </a>
          <a href="#about" className="transition hover:text-[#426FE5]">
            About us
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden text-sm font-semibold text-[#475569] transition hover:text-[#426FE5] sm:block"
          >
            Inicio sesión
          </a>
          <a
            href="/register"
            className="rounded-xl bg-[#426FE5] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#315AC8]"
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
            <span className="text-[#426FE5]">
              {" "}primero hay que comprenderlas
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#64748B]">
            Registra tus migrañas, sus posibles patrones y conecta con personas que están pasando por lo mismo que tú.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/register"
              className="rounded-xl bg-[#426FE5] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#315AC8]"
            >
              Registra un nuevo episodio →
            </a>

            <a
              href="#features"
              className="rounded-xl border border-[#DCE3EF] bg-white px-7 py-4 text-sm font-semibold text-[#475569] transition hover:border-[#426FE5]"
            >
              Descubre más
            </a>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[40px] bg-[#426FE5]/5 blur-3xl" />

          <div className="relative rounded-3xl border border-[#E5EAF2] bg-white p-7 shadow-xl shadow-slate-200/60">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#94A3B8]">
                  Resumen
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  ¡Bienvenido!
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF0FF] text-lg">
                ☺
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F4F7FF] p-5">
                <p className="text-xs font-medium text-[#64748B]">
                  Episodios este mes
                </p>
                <p className="mt-3 text-3xl font-bold text-[#426FE5]">
                  08
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Ejemplo
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F5FF] p-5">
                <p className="text-xs font-medium text-[#64748B]">
                  Intensidad media
                </p>
                <p className="mt-3 text-3xl font-bold text-[#8B70D8]">
                  5.2<span className="text-sm">/10</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Ejemplo
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#EDF0F5] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  Frecuencia
                </p>
                <span className="text-xs text-[#94A3B8]">
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
                      className="w-full rounded-t-lg bg-[#91ABF5]"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] text-[#94A3B8]">
                      {["L", "M", "X", "J", "V", "S", "D"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F5F8FC] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#426FE5]">
                +
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Registra nuevo episodio
                </p>
                <p className="text-xs text-[#94A3B8]">
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
        className="border-t border-[#E9EEF5] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#426FE5]">
              Todo en un mismo lugar
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Conoce mejor tu cuerpo
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Un espacio seguro donde registrar tus síntomas, compartir tus experiencias con otros, ayudar y ser ayudado.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-[#E8EDF5] bg-[#FBFCFE] p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0FF] text-2xl text-[#426FE5]">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#B5C2D5]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#64748B]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E9EEF5] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#94A3B8] sm:flex-row">
          <span className="font-bold text-[#426FE5]">
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
