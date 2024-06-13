
export async function createUserAccount(user: {
    name: string;
    email: string;
    username: string;
    password: string;
}) {
   
    try {
        const newAccount = await fetch("http://localhost:3000/api/v1/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }

}