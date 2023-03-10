import React, { useEffect, useState } from "react";
import { getShow, deleteShow, getFavs } from "../../ApiService";
import { useParams } from "react-router-dom";
import "./Show.css";
import Checkbox from "../Checkbox/Checkbox";
import { saveShow } from "../../ApiService";
import { useUser } from '@clerk/clerk-react';
import { Link } from "react-router-dom";

const Show = () => {
	const [show, setShow] = useState({});
	const { id } = useParams();
	const [isChecked, setIsChecked] = useState(false);
	const { user } = useUser();
	

	function handleCheckboxClick() {
		setIsChecked(!isChecked);
		const info = {
			username: user.username.toLowerCase(),
			id: show.id
		};
		saveShow(info);
	}

	useEffect(() => {
		const showCard = async () => {
			try {
				const response = await getShow(id);
				setShow(response);
				
			} catch (error) {
				console.error(error);
			}
		};
		showCard();
	}, [id]);

	useEffect(() => {
		const checkFav = async () => {
			try {
				const response = await getFavs(user);
				const favObj =  response.map(obj => {
					if(obj.id===id) {
						setIsChecked(true);
					} else {
						setIsChecked(false);
					}
				})

			} catch (error) {
				console.error(error);
			}
		};
		checkFav();
	})

	

	function handleClick(showid) {
		const info = {
			username: user.username,
			id: show.id,
		};
		deleteShow(info);
	}

	return (
		<div className="info">
			<div className="titulo-imagem">
				<div>
					<img
						className="img-inside"
						src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
						alt={`${show.name} poster`}
					/>
				</div>
					<div className="name-overview">
						<h3>{show.name}</h3>
						<p>{show.overview}</p>
					</div>
			</div>
			<div className="perguntas">
				<div className="check">
					<Checkbox
						id="myCheckbox"
						onClick={handleCheckboxClick}
						isChecked={isChecked}
						props={id}
					/>
				</div>
				<div className="seasons-review">
						<Link to={`/show/${show.id}/seasons`}>
							<button className="btn btn-1">Seasons: {show.number_of_seasons}</button>
						</Link>
							<br></br>
						<Link to={`/tv/${id}/reviews`}>
							<button className="btn btn-2">Reviews of the show</button>
						</Link>
						<br></br>
						<button className="btn btn-3" onClick={() => handleClick(show.id)}>DELETE FROM HOME</button>
				</div>
			</div>
		</div>
	);
};

export default Show;
