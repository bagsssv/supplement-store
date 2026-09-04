import { useState } from 'react';

export default function Member() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fitur otentikasi belum disambung ke database, bre!');
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 pt-16">
      <div className="bg-neutral-800 p-8 sm:p-10 rounded-2xl border border-neutral-700 w-full max-w-md shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

        <h1 className="text-3xl font-black text-white mb-2 text-center relative z-10">
          {isLogin ? 'Member ' : 'Join '}<span className="text-orange-500">{isLogin ? 'Area' : 'Sekarang'}</span>
        </h1>
        <p className="text-neutral-400 text-center mb-8 text-sm relative z-10">
          {isLogin ? 'Masuk untuk mendapatkan harga spesial member.' : 'Daftar untuk menikmati diskon eksklusif.'}
        </p>

        <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
          
          {!isLogin && (
            <div>
              <label className="block text-neutral-400 text-sm font-medium mb-1">Nama Panggilan</label>
              <input 
                type="text" 
                className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
                placeholder="Bro Otot" 
              />
            </div>
          )}

          <div>
            <label className="block text-neutral-400 text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
              placeholder="otot@muscle.com" 
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-400 text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
              placeholder="••••••••" 
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black py-3.5 rounded-lg transition-colors mt-2">
            {isLogin ? 'Masuk Sekarang' : 'Daftar Member'}
          </button>
        </form>

        <p className="text-neutral-400 text-center mt-6 text-sm relative z-10">
          {isLogin ? 'Belum punya otot (akun)? ' : 'Sudah punya akun? '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-orange-500 hover:text-orange-400 font-bold">
            {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
          </button>
        </p>

      </div>
    </div>
  )
}