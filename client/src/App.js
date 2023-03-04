import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
	RedirectToSignIn,
	SignOutButton,
} from "@clerk/clerk-react";
import ClerkProviderWithRoutes from './components/ClerkProvider/ClerkProviderWithRoutes';
import PublicPage from './components/PublicPage/PublicPage';
const clerkPubKey = "pk_test_Y2hvaWNlLXJvdWdoeS05NC5jbGVyay5hY2NvdW50cy5kZXYk";


function App() {
  return (
		// <BrowserRouter>
		// 	<ClerkProviderWithRoutes />
		// </BrowserRouter>
		<ClerkProvider publishableKey={clerkPubKey}>
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
			<SignedOut>
				<PublicPage/>
			</SignedOut>
		</ClerkProvider>
	);
}

export default App;

/*
ISSO FUNCIONA DENTRO DO RETURN AQUI NO APP MESMO 
<ClerkProvider publishableKey={clerkPubKey}>
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
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</ClerkProvider>
*/
