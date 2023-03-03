import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignUp
} from "@clerk/clerk-react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate
} from "react-router-dom";
import './ClerkProviderWithRoutes.css'
import Content from "../Content/Content";
import Header from "../Header/Header";

const clerkPubKey = "pk_test_Y2hvaWNlLXJvdWdoeS05NC5jbGVyay5hY2NvdW50cy5kZXYk";

function ClerkProviderWithRoutes () {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      >
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
          <Route 
            path="/protected"
            element={
              <SignedIn>
                <div className="App">
                  <header>
                    <Header />
                  </header>
                  <div>
                    <Router>
                      <Content />
                    </Router>
                  </div>
                </div>
              </SignedIn>
            }
          />
        </Routes>
    </ClerkProvider>
  )

};

export default ClerkProviderWithRoutes;