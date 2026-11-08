
"use client";
import {useState} from "react";
import Link from "next/link";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function iniciarSesion(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (email.trim() === "" || password.trim() === "") {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError("");

    }
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#F7F9F7] px-4 py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#173D32] mb-3">
                        Inicia sesión en Senda
                    </h1>
                
                </div>

                <form
                    onSubmit={iniciarSesion}
                    className="bg-white rounded-2xl shadow-lg border border-[#DDE7DF] p-8 space-y-5"
                >
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-[#173D32]">
                            Email
                        </label>
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="email"
                            className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-[#173D32]">
                            Contraseña
                        </label>
                        <input required onChange={(e) => setPassword(e.target.value)} value={password} id="password" type="password"
                            className="w-full rounded-lg border border-[#DDE7DF] px-4 py-3 outline-none focus:border-[#286B50] focus:ring-2 focus:ring-[#286B50]/20"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#286B50] py-3 font-semibold text-white transition-colors hover:bg-[#173D32] focus:outline-none focus:ring-2 focus:ring-[#286B50] focus:ring-offset-2"
                    >
                        Inicia sesión
                    </button>                
                    <p>¿No tienes una cuenta? <Link href="/register" className="text-[#286B50] font-semibold hover:underline">Regístrate</Link></p>
                </form>
            </div>

        </main>
    );
}
