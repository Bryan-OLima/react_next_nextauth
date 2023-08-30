import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const ServerPage = async () => {

    const session = await getServerSession(authOptions);
    console.log(session)

    if(!session)
        redirect('/signin?callbackUrl=/server');

    return (
        <div className='text-xl'>
        Página com Segurança, {session?.user?.name} <span className='text-blue-300'>Server Auth</span>
        </div>
     )
}

export default ServerPage;