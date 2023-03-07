import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import { BrowserRouter as Router } from 'react-router-dom';
import {
	ClerkProvider,
	SignedIn,
	SignedOut
} from "@clerk/clerk-react";
import PublicPage from './components/PublicPage/PublicPage';
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
				<PublicPage/>
			</SignedOut>
		</ClerkProvider>
	);
}

export default App;