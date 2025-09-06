import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const React_hook_form = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();  // react hook form is a library for handling forms in react js

    const [ShowPassword, setShowPassword] = useState(false); // to show password of input field
    const onsubmit = (data) => {
        alert('form submitted successfully');
        reset(); // to reset the form after submit
        console.log(data);
    }

    const HandleClick = () => {
        setShowPassword(!ShowPassword);
        console.log(ShowPassword);
    }

    return (
        <div className='flex flex-col'>

            <h1>Signup form</h1>

            <form className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>

                <label htmlFor="">
                    Name -

                    <input
                        type='text'
                        {...register("name", {
                            required: 'name is required',
                            minLength: {
                                value: 1,
                                message: 'Name must be at least 1 characters long'
                            }
                        })} placeholder='enter Name' />
                    {errors.name && <p className='font-bold text-sm text-pink-300'>{errors.name.message}</p>}
                </label>
                <label htmlFor="">
                    Email -
                    <input
                        type='email'
                        {...register("email", {
                            required: 'Email is requred',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                            }
                        })} placeholder='enter email' />
                    {errors.email && <p className='font-bold text-sm text-pink-300'>{errors.email.message}</p>}
                </label>
                <label htmlFor="">
                    Password -
                    <input
                        type={ShowPassword ? 'text' : 'password'}
                        {...register("passwordIn", {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} placeholder='enter password' />
                    <span onClick={HandleClick}>{ShowPassword ? 'hide' : 'Show'}</span>
                    {errors.passwordIn && <p className='font-bold text-sm text-pink-300'>{errors.passwordIn.message}</p>}
                </label>
                <label htmlFor="">
                    Confirm Password -
                    <input
                        type={ShowPassword ? 'text' : 'password'}
                        {...register("Confirmpassword", {
                            required: 'Confirm Password is required',
                            validate: value => {
                                const passwordinput = getValues('passwordIn') // to get the value of passowrd input Field
                                return value === passwordinput || "the password do not match"
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} placeholder='enter Confirm password' />
                    <span onClick={HandleClick}>{ShowPassword ? 'hide' : 'Show'}</span>

                    {errors.Confirmpassword && <p className='font-bold text-sm text-pink-300'>{errors.Confirmpassword.message}</p>}
                </label>

                <button type='submit' className=''>Submit</button>

            </form>
        </div>
    )
}

export default React_hook_form;