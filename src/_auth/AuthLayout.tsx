import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (<Navigate to="/" />) : (<>
      <section className=" flex flex-1 justify-center items-center flex-col py-10">
        <Outlet/>
        </section>

        <img
        src="https://img.freepik.com/free-photo/abstract-multi-colored-illustration-nature-vibrant-beauty-generated-by-ai_188544-15591.jpg"
        alt="logo"
        className=" hidden xl:block h-screen w-1/2 object-cover bg-no-repeat "

        />



        </>)}
    </>
  )
}

export default AuthLayout