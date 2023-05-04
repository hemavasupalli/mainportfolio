
import './App.css';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Education from './components/Education'



import Skills from './components/Skills'
import Projects from './components/Projects'

const appRouter = createBrowserRouter([{
  path:"/",
  element :<Body />,
  children:[
    {
      path:"/",
  element :<Home/>

  },
  {
    path:"aboutMe",
element :<AboutMe/>,
},
  {
    path:"skills",
element :<Skills/>,
},
{
  path:"education",
element :<Education/>,
},
// {
//   path:"experience",
// element :<Experience/>,
// },
{
  path:"projects",
element :<Projects/>,
},

  ]
}])
function App() {
  return (
    
   <div>
    
    
     <RouterProvider router={appRouter} /> 
   </div>
  );
}

export default App;
