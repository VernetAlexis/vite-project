import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom"
import { SignInSignUpPage } from "./pages/signin_signup"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root/>,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'page1/',
        element: <SignInSignUpPage/>
      },
      {
        path: 'page2/',
        element: <div>Page2</div>
      }
    ]
  }
])

function Root () {
  return <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page1">Page1</NavLink>
        <NavLink to="/page2">Page2</NavLink>
      </nav>
    </header>
    <div>
      <Outlet/>
    </div>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App
