import { TextInput, Label, Radio } from 'keep-react';
import React from 'react';
import { Envelope, EyeSlash, Lock } from "phosphor-react";
import googleLogo from "../../assets/Google__G__logo.svg.png"
import { Link } from 'react-router-dom';
import { useState } from "react";
// import { Label, Radio } from "keep-react";

const Registration = () => {
    const [selected, setSelected] = useState("");
    const handleOptionChange = (event) => {
        setSelected(event.target.value);
    };
    return (
        <div>

            <form className='w-10/12 md:w-4/12 mx-auto space-y-6 p-10 rounded shadow-2xl text-center' action="">
                <h2 className='text-2xl md:text-3xl font-semibold'>Registration Now</h2>

                <TextInput type='text' id="input" placeholder="Name" color="gray" />
                <TextInput type='tel' id="input" placeholder="phone" color="gray" />

                <fieldset className="flex flex-col gap-3" id="radio">
                    <div className="flex items-center gap-2">
                        <Radio
                            sizing="lg"
                            id="country-1"
                            name="favorite-country"
                            selected={selected}
                            onOptionChange={handleOptionChange}
                            radioShape="circle"
                            value="USA"
                        />
                        <Label htmlFor="country-1">House Owner</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            sizing="lg"
                            id="country-2"
                            name="favorite-country"
                            selected={selected}
                            onOptionChange={handleOptionChange}
                            radioShape="circle"
                            value="Germany"
                        />
                        <Label htmlFor="country-2">House Renter</Label>
                    </div>
                    
                </fieldset>

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


            </form>
        </div>
    );
};

export default Registration;