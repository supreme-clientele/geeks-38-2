import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import classes from './FormPage.module.css';

const regExpAge = new RegExp(/^(100|[1-9][0-9]?|0)$/)
const regExEmail = new RegExp(/^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/)
export const schema  = Yup.object().shape({
    name: Yup.string().trim().required('обязательное поле').min(2, 'необходимо 2'),
    name2: Yup.string().trim().required('обязательное поле').min(2, 'необходимо 2'),
    age: Yup.string().trim().required('обязательное поле').matches(regExpAge, '1-100'),
    email: Yup.string().required('обязательное поле').matches(regExEmail, 'invalid email'),
})

const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        clearErrors,
        setValue,
        reset,
        control

    } = useForm({
        defaultValues: {
            name: 'Bakyt'
        },
        resolver: yupResolver(schema)
    })
    const error = (data) => {
        console.log(data);
    }
    const submit = (data) => {
        console.log(data);
    }
    const name = watch('name')
    const name2 = watch('name2')


    return (
        <div>
            <div>{name2}</div>
            <form onSubmit={handleSubmit(submit, error)}>
                <Controller
                    name={'name2'}
                    control={control}
                    render={({ field })=>
                        (
                        <input {...field} type="text"/>
                    )}
                />
                <input
                    type="text"
                    {
                        ...register('name')
                    }
                    aria-invalid={errors.name ? true : false}
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input
                    type="text"
                    {
                        ...register('age')
                    }
                    aria-invalid={errors.name ? true : false}

                />
                {
                    errors?.age?.message && <p>{errors.age.message}</p>
                }
                <input
                    type="text"
                    {
                        ...register('email')
                    }
                    aria-invalid={errors.email ? true : false}

                />
                {
                    errors?.email?.message && <p>{errors.email.message}</p>
                }
                <button type={'submit'}>Отправить</button>
                <button type={'button'} onClick={()=> setValue('name', 'Кубан')}>ОТправить имя</button>
                <button type={'button'} onClick={()=> clearErrors()}>Очистить ошибки</button>
                <button type={'button'} onClick={()=> reset()}>Очистить форму</button>
                <div>{name}</div>
            </form>
        </div>
    );
};

export default FormPage;