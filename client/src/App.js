import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import { BrowserRouter as Router } from 'react-router-dom';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
	RedirectToSignIn,
} from "@clerk/clerk-react";

const clerkPubKey = "pk_test_Y2hvaWNlLXJvdWdoeS05NC5jbGVyay5hY2NvdW50cy5kZXYk";

function App() {
  return (
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
	);
}

export default App;
