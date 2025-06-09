
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lun", value: 400 },
  { name: "Mar", value: 300 },
  { name: "Mer", value: 500 },
  { name: "Gio", value: 200 },
  { name: "Ven", value: 278 },
  { name: "Sab", value: 189 },
  { name: "Dom", value: 239 },
];

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <button
          onClick={() => setLoggedIn(true)}
          className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition text-lg"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Crypto Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {["Bitcoin", "Ethereum", "Solana"].map((coin) => (
          <div key={coin} className="bg-gray-800 rounded-2xl p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{coin}</h2>
            <p className="text-sm mb-4">Prezzo attuale: ${(Math.random() * 50000 + 1000).toFixed(2)}</p>
            <div className="flex gap-2">
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl">Compra</button>
              <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl">Vendi</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Andamento Settimanale</h2>
      <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
