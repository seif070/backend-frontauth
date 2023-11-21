import axios from 'axios';

export const postauthUser = async (values) => {
  try {
    const addinguser = await axios.post('http://localhost:5200/auth/register', { ...values });
    return addinguser.data;
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error; 
  }
};

export const fetchautUser=async()=>{
  const token=localStorage.getItem('token')
  const {data}=await axios.get('http://localhost:5200/auth/uraccount',{headers:{Authorization:token}})
  return data 

}