import React, { useState } from 'react';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getApiAxios, postAxiosForm } from '../Fetch/Fetch';

export const schema  = Yup.object().shape({
    name: Yup.string().trim().required('оюязательное поле').min(2, 'необходимо 2'),
    surname: Yup.string().trim().required('оюязательное поле').min(2, 'необходимо 2'),
    id: Yup.string().trim().required('оюязательное поле').min(2, 'необходимо 2'),
})
const FormAxios = () => {
    const [students, setStudents] = useState([])

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
        resolver: yupResolver(schema)
    })
    const error = (data) => {
        console.log(data);
    }
    const submit = async (data) => {
        await postAxiosForm('student', data)
        await getApiAxios('student').then(data=> setStudents(data))
        console.log(data);
    }
    const name = watch('name')
    const surname = watch('surname')

    return (
        <div>
            <form onSubmit={handleSubmit(submit, error)}>
                <input
                    type="text"
                    {
                        ...register('name')
                    }
                    aria-invalid={errors.name ? true : false}
                    placeholder='name'
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input
                    type="text"
                    {
                        ...register('surname')
                    }
                    aria-invalid={errors.surname ? true : false}
                    placeholder='surname'


                />
                {
                    errors?.surname?.message && <p>{errors.surname.message}</p>
                }
                <input
                    type="text"
                    {
                        ...register('id')
                    }
                    aria-invalid={errors.id ? true : false}
                    placeholder='id'

                />
                {
                    errors?.id?.message && <p>{errors.id.message}</p>
                }
                <button type={'submit'}>Отправить</button>
            </form>
            {
                students.map(student=>
                    <div style={{display: 'flex'}}>
                        <p key={student.id}>{student.id}=>{student.name}</p>
                    </div>
                )}
        </div>
    );
};

export default FormAxios;