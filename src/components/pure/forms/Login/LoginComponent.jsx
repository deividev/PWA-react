import React from 'react';
import { useForm } from '../../../../hooks/userForm';

const LoginComponent = (props, send) => {

    //Variables
    const initialForm = {
        email: '',
        password: '',
        isLogin: false
    };
    const validationsForm = (form) => {
        let errors = {};
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if(!form.email.trim()) {
            errors.email = 'El asunto es obligatorio';
        }
        else if (!regexEmail.test(form.email.trim())) {
            errors.email = 'El asunto solo admite letras y espacios en blanco';
        }
        return errors;
    };


    const {
        form,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
      } = useForm(initialForm, validationsForm, props);

        return (
            <div>
               <form onSubmit={handleSubmit}>
                   <div className="flex flex-column">
                        <label>Email</label>
                        <input 
                            className={errors.email ? 'error-input' : 'input'} 
                            placeholder="Escribe su email"
                            type="email" 
                            name="email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.email} 
                            required
                            />
                            {errors.email && <span className="error">{errors.email}</span >}
                   </div>
                   <div>
                        <label >Password</label>
                        <input 
                            className={errors.password ? 'error-input' : 'input'} 
                            placeholder="Escribe su password"
                            type="password" 
                            name="password" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.password} 
                            required
                            />
                            {errors.password && <span className="error">{errors.password}</span >}
                   </div>
                   <button 
                        type="submit" 
                        className='new'
                        >
                            Login
                    </button>
               </form>
            </div>
        );
}

export default LoginComponent;