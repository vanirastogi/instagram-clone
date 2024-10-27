import { useEffect } from "react";
import { useRecentProfiles } from "../context/RecentProfilesContext"
import Link from "next/link";
const RecentlyViewed = () => {
    const {recentProfiles} = useRecentProfiles();

   
    
    return(
        <div className=" p-10">
            
            <h1 className="font-bold text-white">Recenty viewed </h1>
            {!recentProfiles.length?
               ( <h1 className=""> click on user to see profiles </h1>
            
            ): recentProfiles.map((user) => (
                <div className='p-4 flex'>
                <img
                    src={user?.profileImage}
                    alt={user?.fullName} 
                    className='w-12 h-12 rounded-full mr-4'
                />
                <Link href={`/user/${user?.id}`}>
                    <h2 className="text-lg py-2 ">
                    {user?.fullName} 
                    </h2>
                </Link>
                
                </div>
            ))}
        </div>
    )
}
export default RecentlyViewed;