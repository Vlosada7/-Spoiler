import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findByCat } from "../../ApiService";
import { Link } from "react-router-dom";
import "./Categorie-selected.css";
import {FiArrowLeftCircle} from 'react-icons/fi'

const CategorieSelected = () => {
	const [categorie, setCategorie] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		const getShowsbyCat = async () => {
			try {
				const response = await findByCat(name);
				setCategorie(response.results);
			} catch (error) {
				console.error("Erro ao fazer requisição: ", error);
			}
		};
		getShowsbyCat();
	}, []);



	return (
		<div>
			<p>{name}</p>
			<div className="shows-list">
				<div>
			<Link to="/categories">
          <button className="btn-back">
            <FiArrowLeftCircle size={40} color="rgba(255, 255, 255, 1)"/>
          </button>
        </Link>

				</div>
				{categorie.map((show) => {
					if (!show.poster_path) {
						return null;
					}
					return (
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
					);
				})}
			</div>
		</div>
	);
};

export default CategorieSelected;
