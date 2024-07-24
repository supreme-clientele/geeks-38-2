import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import classes from './FormPage.module.css';

const regExpAge = new RegExp(/^(100|[1-9][0-9]?|0)$/)
export const schema  = Yup.object().shape({
    name: Yup.string().trim().required('обязательное поле').min(2, 'необходимо 2'),
    age: Yup.string().trim().required('обязательное поле').matches(regExpAge, '1-100'),
})

const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        clearErrors,
        setValue,
        reset

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


    return (
        <div>
            <form onSubmit={handleSubmit(submit, error)}>
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