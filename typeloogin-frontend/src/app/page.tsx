"use client"

import { useState } from "react";

interface User{
  name: string,
  email: string,
  password: string
}


export default function Home() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const formData: User = {name, email, password}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const sendData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        if(!response.ok){
          throw new Error(`Erro ao enviar os dados ${response.status}`)
        }
        console.log("dados enviados")
      } catch (error) {
        console.log("Erro ao enviar os dados", error)
      }
    }
    sendData()
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#f5f7fa]">

        <div className="absolute z-0 w-[400px] h-[400px] bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm opacity-40"/>

        <div className="relative z-10 mx-auto bg-white w-full max-w-2xl h-96 flex flex-col items-center justify-center rounded-xl shadow-lg"> {/* container do forms */}
          <h1 className="text-2xl text-black mb-4 font-bold">Formulário</h1>
          <form 
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit}
          >
            <input 
            type="text" 
            placeholder="Nome" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Email" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Senha" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button 
            className="bg-[#6c63ff] text-white rounded p-2 hover:bg-blue-600 transition duration-200"
            type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
