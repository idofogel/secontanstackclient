import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { queryClient } from './queryClient1';
type user = {
    user_id:number;
    name:string;
    job:string;
}
type GetUserResponse = {
  user: user;
};
type NameToUpload = {
    name:string
}
export const TryTanstack = () => {
    const [count,setCount] = useState<number>(0);
    const mutation = useMutation({mutationFn:async (info:NameToUpload)=>{
        return await axios.post('http://localhost:3001/users/changeDta',info);
    },
    onSuccess:() => {
        queryClient.setQueryData(['user'],(oldData: GetUserResponse)=>{
            oldData.user.name = document.getElementsByTagName('input')[0].value;
            return oldData;
        });
        setCount(prev => prev+1);
    }
});

    const fetchUsers = async (): Promise<GetUserResponse > =>{
        const res = await fetch('http://localhost:3001/users/getusers');
        if(!res.ok){
            throw new Error('not working');
        }
        const userret = await res.json();
        console.log(userret);
        return userret;
    }
    const callMutate = (event: React.MouseEvent<HTMLButtonElement>) =>{
        if(event.currentTarget !==null && event.currentTarget.parentElement !== null){
            mutation.mutate({name: event.currentTarget.parentElement.getElementsByTagName('input')[0].value});
        }
    }
    const {data,isLoading,error} = useQuery<GetUserResponse>({queryKey:['user'],queryFn: fetchUsers});
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return <><ul>
      {data!.user.name}<br />
      <button onClick={(event) =>{callMutate(event)}} style={{width:'300px',height:'30px',backgroundColor:'gray',borderRadius:'5px',color:'white',cursor:'pointer'}}>mutate</button>
        <br /> <input type="text" />
        <br />Mutation no. {count}
    </ul></>
}