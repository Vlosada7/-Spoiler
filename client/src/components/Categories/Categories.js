import React, { useEffect, useState } from "react";
import { getCategories } from "../../ApiService";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCat = async () => {
			try {
				const response = await getCategories();
				setCategories(response.genres);
			} catch (error) {
				console.error("Erro ao fazer requisição: ", error);
			}
		};
		getCat();
	}, []);

	function handleClick(catId) {
		console.log(catId);
	}

	return (
		<div className="categories-list">
			{categories.map((cat) => (
				<div
					className="categorie"
					key={cat.id}
					onClick={() => handleClick(cat.id)}
				>
					<Link to={`/categorie/${cat.name}`}>
						<p>{cat.name}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Categories;
