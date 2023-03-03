import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { getFavs } from "../../ApiService";
import { isEmpty } from "lodash";
import { getFavId } from "../../ApiService";
import { Link } from "react-router-dom";

const Home = () => {
	const [showList, setShowList] = useState([]);

	useEffect(() => {
		const favShows = async () => {
			try {
				const response = await getFavs();
				setShowList(response);
			} catch (error) {
				console.error("Erro ao fazer requisição: ", error);
			}
		};
		favShows();
	}, []);

	function handleClick(movieId) {
		// Navegue para a página do filme
		// history.push(`/filme/${movieId}`);
	}

	return (
		<div>
			{isEmpty(showList) ? (
				<p>Sem séries assistidas por enquanto</p>
			) : (
				<div className="shows-list">
					{showList.map((show) => (
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
			)}
		</div>
	);
};

export default Home;
