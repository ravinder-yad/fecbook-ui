import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                navigate('/');
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-light-bg px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[980px] gap-12 lg:gap-20">

                {/* Left Side: Branding */}
                <div className="text-center lg:text-left lg:pb-12 max-w-[500px]">
                    <h1 className="text-fb text-[50px] lg:text-[60px] font-bold -ml-1 mb-2 tracking-tight">facebook</h1>
                    <h2 className="text-[24px] lg:text-[28px] leading-tight text-[#1c1e21] font-medium">
                        Facebook helps you connect and share with the people in your life.
                    </h2>
                </div>

                {/* Right Side: Login Form */}
                <div className="flex flex-col items-center w-full max-w-[396px]">
                    <div className="bg-white p-4 lg:p-5 rounded-fb shadow-fb w-full">
                        <form onSubmit={login} className="flex flex-col gap-3.5">
                            <input
                                placeholder="Email address or phone number"
                                className="fb-input"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                className="fb-input"
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />

                            {error && <p className="text-red-500 text-[13px] text-center">{error}</p>}

                            <button type="submit" className="bg-fb text-white w-full py-3 rounded-fb font-bold text-[20px] hover:bg-blue-600 transition-colors">
                                Log In
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <a href="#" className="text-fb text-[14px] hover:underline">Forgotten password?</a>
                        </div>

                        <hr className="my-5 border-gray-300" />

                        <div className="flex justify-center mb-1">
                            <button className="bg-light-success text-white px-4 py-2.5 rounded-fb font-bold text-[17px] hover:bg-[#36A420] transition-colors">
                                Create new account
                            </button>
                        </div>
                    </div>

                    <div className="mt-7 text-sm text-[#1c1e21]">
                        <p><strong className="hover:underline cursor-pointer">Create a Page</strong> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
