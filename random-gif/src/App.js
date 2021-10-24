import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import RandButton from "./components/RandButton";
import Gallery from "./components/Gallery";
import Alert from "./components/Alert";

function App() {
	const [keyword, setKeyword] = useState("random");
	const [allRandomGif, setAllRandomGif] = useState();
	const randIdx = Math.floor(Math.random() * 50);
	const [currGifUrl, setCurrGifUrl] = useState("");
	const [alert, setAlert] = useState(false);
	//.pagination.total_count
	const APIkey = "lFwuMbf2H89fVRV23hXR8ogP7YsVryk7";
	let search = "random";
	let http = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${search}&limit=50&offset=0&rating=g&lang=en`;

	useEffect(() => {
		fetch(http)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const cleanData = data.data.map((obj) => {
					return {
						src: obj.images.original.url,
						title: obj.title,
						id: obj.id,
					};
				});

				setCurrGifUrl(cleanData[randIdx].src);
				setAllRandomGif(cleanData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function handleInputWord(str) {
		if (str.trim().length === 0) {
			setAlert(true);
		} else {
			setKeyword(str);
			setCurrGifUrl(allRandomGif[randIdx].src);
			search = str;
			console.log(http);
		}
	}

	function randomClick() {
		console.log("clicked random");
	}

	function hideAlert(e) {
		setAlert(false);
	}

	console.log(`keyword stored: ${keyword}`);
	return (
		<div className="App">
			{alert && <Alert handleOkay={hideAlert} />}
			<Header></Header>
			<Input onSavedWord={handleInputWord} />
			<RandButton onClick={randomClick} />
			<Gallery onImgObj={currGifUrl}></Gallery>
		</div>
	);
}

export default App;
