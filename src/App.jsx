import { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboad/EmployeDashboard'
import AdminDashboad from './components/Dashboad/AdminDashboad'
import { AuthContext } from './context/AuthProvider'
function App() {

  const [user, setuser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    // if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setuser(userData.role)
        setLoggedInUserData(userData.data)
      }
    // }
  }, []); 

  const handleLogin = (email, password) => {

    if (email === 'admin@me.com' && password === '123') {
      setuser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setuser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }));
      } else {
        alert('Employee not found or incorrect password');
      }
    } else {
      alert('Please wait, data is still loading or missing');
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboad changeuser={setuser} /> : (user == 'employee' ? <EmployeDashboard changeuser={setuser}  data ={loggedInUserData} />: null)}

    </>
  )
}

export default App



