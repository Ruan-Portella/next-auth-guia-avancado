import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={"text-6xl font-semibold text-white drop-shadow-md"}>
          🔐 Autenticação
        </h1>
        <p className="text-white text-lg">
          Um serviço de autenticação simples
        </p>
        <div>
          <LoginButton>
            <Button variant='secondary' size='lg'>
              Entrar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
