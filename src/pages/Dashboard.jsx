import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
    // console.log(user)
    const {displayName,email,photoURL} = user
    return (
        <div>
            <img className="rounded" src={photoURL} alt="" />
            <p className="text-xl mt-2">User Name:{displayName}</p>
            <p className="text-xl mt-2">User Email:{email}</p>
        </div>
    );
};

export default Dashboard;