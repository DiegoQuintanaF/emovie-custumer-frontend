import { Form } from "@remix-run/react";
import { Input } from "~/components/forms/Input";


export const action = async () => {
  await (() => new Promise((resolve) => setTimeout(resolve, 2000)))();
  return {
    isLogged: true,
    user: {
      email: "asd",
      password: "asd",
      name: "asd",
    }
  };
}

export default function Register() {
  return (
    <div className="container grid h-page w-full place-content-center">
      <h1 className="p-2 text-center text-xl font-bold">Registro</h1>
      <Form method="POST" className="flex w-full flex-col gap-4 p-2">
        <Input label="Email" name="email" type="email" />
        <Input label="Contraseña" name="password" type="password" />
        <Input
          label="Repita su contraseña"
          name="confirmPassword"
          type="password"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-black p-2 text-white"
        >
          Registrarse
        </button>
      </Form>
    </div>
  )
}