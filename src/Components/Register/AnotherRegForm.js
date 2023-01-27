import React from 'react';
import { useForm } from 'react-hook-form';
import './Registerform.css'

function UseFormHooks(props) {
    const { register, handleSubmit ,formState: { errors }} = useForm({
        defaultValues: {
          Name: '',
          Phone_number: '',
          email:'',
        //   category: '',
        //   checkbox: [],
        //   radio: ''
        }
      });
      function onSubmit(data){
          console.log("data",data)
          alert('you have submitted')
      }
    
      return (
          <div className='form--1'>
          <div className='form-group'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><h1>Register</h1></div>
            <div>
          <input {...register("Name", { required: true })} placeholder="Name" />
          </div>
          {errors.Name && <span>Invalid first name</span>}
          <br></br>
          <div>
          <input {...register("Phone_number", { maxLength: 10 })} placeholder="Phone No." />
          </div>
          <br></br>
          {errors.Phone_number && <span>Invalid phone number</span>}
          <div>
          <input
    placeholder="Email"
    {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    })}
    type="email"
    required
    className="input"
/>
</div>
{errors.email && <span>Invalid mail id</span>}
          {/* <select {...register("category")}>
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
          
          <input {...register("checkbox")} type="checkbox" value="A" />
          <input {...register("checkbox")} type="checkbox" value="B" />
          <input {...register("checkbox")} type="checkbox" value="C" />
          
          <input {...register("radio")} type="radio" value="A" />
          <input {...register("radio")} type="radio" value="B" />
          <input {...register("radio")} type="radio" value="C" /> */}
         
          <input type="submit" />
        </form>
        </div>
        </div>
      );
}

export default UseFormHooks;