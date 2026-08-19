export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-20 px-4 text-center min-h-[80vh] text-white">
      <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
        🔥 Diskon Member Hingga 30%
      </span>
      <h2 className="text-5xl md:text-7xl font-black mb-6 max-w-4xl leading-tight">
        Bahan Bakar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Maksimal</span> Untuk Otot Anda.
      </h2>
      <p className="text-neutral-400 max-w-xl mb-10 text-lg">
        Suplemen orisinal tersertifikasi BPOM. Dapatkan harga khusus dengan mendaftar sebagai Member Gold hari ini.
      </p>
      <button className="bg-white text-black px-8 py-4 rounded-lg font-black text-lg hover:bg-neutral-200 transition-colors">
        Belanja Sekarang
      </button>
    </main>
  )
}