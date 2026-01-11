import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                alert("Login Success");
                navigate('/');
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#F0F2F5]">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

                {/* Recent Logins / Branding */}
                <div className="text-center md:text-left mb-8 md:mb-0 max-w-md">
                    <h1 className="text-fb text-6xl font-bold mb-4">facebook</h1>
                    <h2 className="text-2xl md:text-3xl text-black">Facebook helps you connect and share with the people in your life.</h2>
                </div>

                {/* Login Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-[396px]">
                    <form onSubmit={login} className="flex flex-col gap-4">
                        <input
                            placeholder="Email address or phone number"
                            className="border border-gray-300 p-3.5 rounded-lg w-full text-[17px] focus:outline-1 focus:outline-blue-400"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="border border-gray-300 p-3.5 rounded-lg w-full text-[17px] focus:outline-1 focus:outline-blue-400"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button type="submit" className="bg-fb text-white w-full py-3 rounded-md font-bold text-[20px] hover:bg-blue-600 transition-colors">
                            Log In
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <a href="#" className="text-fb text-sm hover:underline">Forgotten password?</a>
                    </div>

                    <hr className="my-5 border-gray-300" />

                    <div className="flex justify-center">
                        <button className="bg-[#42B72A] text-white px-4 py-3 rounded-md font-bold text-[17px] hover:bg-[#36A420] transition-colors">
                            Create New Account
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-sm text-gray-500">
                <p><strong>Create a Page</strong> for a celebrity, brand or business.</p>
            </div>
        </div>
    );
};

export default Login;
