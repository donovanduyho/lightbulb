import React, { useEffect, useState } from "react";

interface CreateBtnProps {
  userId: string;
}

export default function CreateBtn({ userId }: CreateBtnProps) {
    // Check if userId in Teacher table
    // No return <></>
    // 
    const [isTeacher, setIsTeacher] = useState<boolean | null>(null);

    useEffect(() => {
        const checkIfTeacher = async () => {
          try {
            
            const response = await fetch(`/api/check-teacher?userId=${userId}`);
            const data = await response.json();
    
            if (data.isTeacher) {
              setIsTeacher(true);
            } else {
              setIsTeacher(false);
            }
          } catch (error) {
            console.error("Error checking teacher status:", error);
            setIsTeacher(false); // Fallback in case of error
          }
        };
        checkIfTeacher();
  }, [userId]);

    if(!isTeacher){
        return(
            <button className=" bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
                Join Class
            </button>
        );
        
    }
    return (
    <>
        <button className=" bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
            Create Class
        </button>
    </>);
}
