import { useState } from "react";

export const useForm = (initialState:any) => {
  const [form, setForm] = useState(initialState); 

  const onChange = (event:any) => {
    const { name, value } = event.target; 
    setForm({ ...form, [name]: value }); 
  };

  const cleanFields = () => {
    setForm(initialState); 
  };

  return { form, onChange, cleanFields }; 
};

export default useForm; 