import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { getFavs } from "../../ApiService";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import { useUser } from '@clerk/clerk-react'


const Home = () => {
	const [showList, setShowList] = useState([]);
	const { user } = useUser();
	const fullUser = {
		username: user.username,
	}

	useEffect(() => {
		const favShows = async () => {
			try {
				const response = await getFavs(fullUser);
				setShowList(response);
			} catch (error) {
				console.error("Erro ao fazer requisição: ", error);
			}
		};
		favShows();
	}, []);

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
