import React, { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';
import "./Discovery.css";
import { discover } from "../../ApiService";
import { getShow } from "../../ApiService";
import { Link } from "react-router-dom";
import Show from "../Show/Show";
import { useUser } from '@clerk/clerk-react'

const Discovery = () => {
	const [shows, setShows] = useState([]);
	const { user } = useUser();
	useEffect(() => {
		const getDiscovery = async () => {
			try {
				const response = await discover();
				setShows(response.results);
			} catch (error) {
				console.error("Erro ao fazer requisição:", error);
			}
		};
		getDiscovery();
	}, []);

	function handleClick(showId) {
		// Navegue para a página do filme
		// getShow(showId);
		// console.log(showId);
		// history.push(`/filme/${movieId}`);
	}

	return (
		<div>
			<div className="shows-list">
				{shows.map((show) => (
					<div
						className="show"
						key={show.id}
						onClick={() => handleClick(show.id)}
					>
						<Link to={`/show/${show.id}`}>
							<img
								className="img-out"
								src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
								alt={`${show.name} poster`}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Discovery;
