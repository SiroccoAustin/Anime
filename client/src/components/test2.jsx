import React, {useState} from "react";

const Dashboard = ()=>{
    const [isAdmin, setIsAdmin] = useState(false);
    return(
        <div>
            {isAdmin? (
            <p>Welcom, Admin</p>
        ): (
            <p>Unauthorized Access</p>
        )}
        </div>
    )
}

export default Dashboard;