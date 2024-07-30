import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classes from './PokemonFormPage.module.css';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

const PokemonFormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        clearErrors,
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <h2 className={classes.title}>Register with</h2>
            <div className={classes.groupContainer}>
                <div className={classes.inputGroup}>
                    <label className={classes.label}>Name</label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        {...register('name')}
                        className={classes.input}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p className={classes.error}>{errors.name.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label className={classes.label}>Email</label>
                    <input
                        type="email"
                        placeholder="Your email"
                        {...register('email')}
                        className={classes.input}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className={classes.error}>{errors.email.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label className={classes.label}>Password</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        {...register('password')}
                        className={classes.input}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p className={classes.error}>{errors.password.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label className={classes.label}>Re-enter password</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        {...register('confirmPassword')}
                        className={classes.input}
                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                    />
                    {errors.confirmPassword && <p className={classes.error}>{errors.confirmPassword.message}</p>}
                </div>
            </div>
            <button type="submit" className={classes.submitButton}>Continue</button>
        </form>
    );
};

export default PokemonFormPage;
