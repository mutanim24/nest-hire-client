import { Label, TextInput } from 'keep-react';
import React from 'react';
import { Envelope, EyeSlash, Lock } from "phosphor-react";
import googleLogo from "../../assets/Google__G__logo.svg.png"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <form className='w-10/12 md:w-4/12 mx-auto space-y-6 p-10 rounded shadow-2xl text-center' action="">
                <h2 className='text-2xl md:text-3xl font-semibold'>Login Now</h2>
                <TextInput
                    id="#id-9"
                    placeholder="example@gmail.com"
                    color="gray"
                    sizing="md"
                    addon={<Envelope size={20} color="#5E718D" />}
                    addonPosition="left"
                />
                <div>

                    <TextInput
                        id="#id-10"
                        placeholder="Password"
                        color="gray"
                        sizing="md"
                        type="password"
                        addon={<Lock size={20} color="#5E718D" />}
                        addonPosition="left"
                        icon={<EyeSlash size={20} color="#5E718D" />}
                        iconPosition="right"
                    />
                </div>
                <div className='p-3 justify-center items-center flex flex-row gap-4 rounded shadow'>
                    <img width={25} src={googleLogo} alt="" />
                    <h5 className='font-semibold'>Login With Google</h5>
                </div>
                <div className='text-blue-600'>
                    <Link to="/registration">New at Nest Hire</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;