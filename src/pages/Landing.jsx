import { Outlet } from "react-router-dom";
 const Landing = () => {

    const styles ={
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center'
    }
  return (
    <div style ={styles}>
       <h1> Rental Equipment Marketplace</h1>
       <p>Welcome to the world of affordable Rental Equipments,
       You can get stuffs <strong>for rent!!!</strong></p><br/>
       <p><strong>Register</strong> and <strong> Login </strong>to get started.</p>
       <Outlet />
    </div>
  )
}

export default Landing;
