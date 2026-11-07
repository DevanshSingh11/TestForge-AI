import useHealth from './hooks/useHealth'

function StatusRow({ label, value, ok }) {
  return (
    <div className="flex justify-between py-2 border-b border-white/5">
      <span className="text-gray-400">{label}</span>
      <span className={ok ? 'text-emerald-400' : 'text-red-400'}>{value}</span>
    </div>
  )
}

export default function App() {
  const { data, error, loading } = useHealth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0f19] to-[#151b2e]">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <h1 className="text-2xl font-semibold">TestForge AI</h1>
        <p className="text-sm text-gray-400 mb-6">System connectivity check</p>

        {loading && <p className="text-gray-400">Checking backend…</p>}
        {error && <p className="text-red-400">Backend unreachable: {error}</p>}
        {data && (
          <>
            <StatusRow label="API" value={data.status} ok={data.status === 'ok'} />
            <StatusRow label="Database" value={data.database} ok={data.database === 'connected'} />
            <StatusRow label="Environment" value={data.environment} ok />
          </>
        )}
      </div>
    </div>
  )
}