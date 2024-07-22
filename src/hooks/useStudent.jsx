import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from '../auth/AuthProvider';
import useAxiosPublic from './useAxiosPublic';


const useStudent = () => {
    
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    
    const {data: studentData = [], refetch} = useQuery({
        queryKey: ['user-student',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/students/${user.email}`);
            return res.data
        },
    }
    )

    return [studentData, refetch]
};

export default useStudent;