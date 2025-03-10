import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import jwt from 'jsonwebtoken'

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter()
    const user_token = localStorage.getItem('app_user_token')
    useEffect(() => {
        if (user_token) {
            try {
                const decode_data = jwt.verify(user_token, process.env.JWT_SECRET)
                setUser(decode_data)
            } catch (error) {
                console.log('Invalid Token  :>> ', error);
                router.push('/user/login');
            }
        } else {
            router.push('/user/login');
        }
    }, [])

    return <> {
        user ? 'Loading...' : <h1>You are wellcome `${user.email}` !  </h1>
    }
    </>
}