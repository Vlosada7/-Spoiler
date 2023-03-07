import React, { useEffect, useState } from "react";
import "./Discovery.css";
import { discover } from "../../ApiService";
import { Link } from "react-router-dom";


const Discovery = () => {
	const [shows, setShows] = useState([]);
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



	return (
		<div>
			<div className="shows-list">
				{shows.map((show) => (
					<div
						className="show"
						key={show.id}
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
