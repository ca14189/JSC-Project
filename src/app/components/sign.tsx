'use client';
import { useRouter } from 'next/navigation';

interface SignInProps {
  setPopUpOf: (value: boolean) => void;
}

export default function SignIn({ setPopUpOf }: SignInProps) {
  const router = useRouter();
// const popUpOf = ()=>{
//   setPopUpOf(false)
// }

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');

  //   try {
  //     // const res = await fetch('/api/auth/signin', {
  //     //   method: 'POST',
  //     //   headers: { 'Content-Type': 'application/json' },
  //     //   body: JSON.stringify({ email, password }),
  //     // });
  //     const res = ''
  //     const data = await res.json();

  //     if (!res.ok) {
  //       setError(data.error || 'Login failed');
  //       return;
  //     }

  //     localStorage.setItem('token', data.token);
  //     alert(data.message);
  //     //   router.push('/dashboard');
  //   } catch {
  //     setError('Something went wrong');
  //   }
  // };

  return (
    <div className='flex border justify-center mt-20'>
      <form
      // onSubmit={handleLogin}
      className='bg-[#f3eada] p-8 rounded-lg shadow-md w-full max-w-sm'
    >
      <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>Email</label>
        <input
          type='email'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder='you@example.com'
          required
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>Password</label>
        <input
          type='password'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder='••••••••'
          required
        />
      </div>

      {/* {error && <p className='text-red-600 text-sm mb-3'>{error}</p>} */}

      <button
        // type='submit'
        className='w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-500 transition'
      >
        Login
      </button>

      <p className='text-center text-sm mt-4'>
  Don't have an account?{' '}
  <button
    onClick={() => {
      setPopUpOf(false);           // 1. Close popup
      router.push('/contact-jschamps#signup-form');  // 2. Navigate
    }}
    className="text-blue-600 hover:underline"
  >
    Sign Up
  </button>
</p>

    </form>
    </div>
    
  );
}
