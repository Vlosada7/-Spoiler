import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import Home from "../Home/Home";
import Discovery from "../Discovery/Discovery";
import Show from "../Show/Show";
import Categories from "../Categories/Categories";
import CategorieSelected from "../Categorie-selected/Categorie-selected";
import Reviews from "../Reviews/Reviews";
import SearchResults from "../SearchResult/SearchResults";
import Season from "../Season/Season";
import SeasonNumber from "../SeasonNumber/SeasonNumber";
import Episodes from "../Episodes/Episodes";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/discovery" element={<Discovery />} />
				<Route path="/show/:id" element={<Show />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/categorie/:name" element={<CategorieSelected />} />
				<Route path="/tv/:id/reviews" element={<Reviews />} />
				<Route path="/show/:id/seasons" element={<Season />} />
				<Route path="/show/:id/seasons/:seasonId" element={<SeasonNumber />} />
				<Route path="/tv/:id/season/:seasonNumber/episode/:epNumber" element={<Episodes />} />
				<Route path="/search" element={<SearchResults />}/>
				{/* 
				<Route path="/searchresults" element={<SearchResults />}/>
        <Route path='/surprise-me' element={<SurpriseMe />} />
        <Route path='/profile' element={<Profile />} /> */}
			</Routes>
		</div>
	);
};

export default Dashboard;
