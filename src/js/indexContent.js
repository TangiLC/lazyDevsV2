window.onload = () => {
	let blogData = "";
	fetch("data/blog.json")
		.then((response) => response.json())
		.then((data) => {
			blogData = JSON.stringify(data);
			console.log("blogData", blogData);
		})
		.catch((error) => {console.log(error)});

	const indexContentData = [
		{
			target: "presentation",
			content: `Présentation du studio. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed non consequat eros. Nulla porttitor semper
    convallis. Maecenas imperdiet tristique ante, a iaculis odio
    varius vitae. Suspendisse orci enim, mattis at velit et, molestie
    laoreet purus. Duis ut tristique lectus, sit amet fermentum nibh.
    Fusce eget eros vitae erat maximus fringilla. Ut quis sollicitudin
    nulla.`,
		},
		{
			target: "team-presentation",
			content: `Nous sommes un studio indépendant de jeux vidéos. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Sed non consequat
    eros. Nulla porttitor semper convallis. Suspendisse orci enim,
    mattis at velit et, molestie laoreet purus. Duis amet fermentum
    nibh. Fusce eget eros vitae erat maximus fringilla. Ut quis
    sollicitudin nulla.`,
		},
	];

	const collabData = [
		{
			name: "collab1",
			title: "collab1",
			imgUrl: "assets/collab/collab1.png",
			targetUrl: "blank",
		},
		{
			name: "collab2",
			title: "collab2",
			imgUrl: "assets/collab/collab2.png",
			targetUrl: "blank",
		},
		{
			name: "collab3",
			title: "collab3",
			imgUrl: "assets/collab/collab3.png",
			targetUrl: "blank",
		},
		{
			name: "collab4",
			title: "collab4",
			imgUrl: "assets/collab/collab4.png",
			targetUrl: "blank",
		},
		{
			name: "collab5",
			title: "collab5",
			imgUrl: "assets/collab/collab5.png",
			targetUrl: "blank",
		},
		{
			name: "collab6",
			title: "collab6",
			imgUrl: "assets/collab/collab6.png",
			targetUrl: "blank",
		},
		{
			name: "collab7",
			title: "collab7",
			imgUrl: "assets/collab/collab7.png",
			targetUrl: "blank",
		},
		{
			name: "collab8",
			title: "collab8",
			imgUrl: "assets/collab/collab8.png",
			targetUrl: "blank",
		},
		{
			name: "collab9",
			title: "collab9",
			imgUrl: "assets/collab/collab9.png",
			targetUrl: "blank",
		},
		{
			name: "collab10",
			title: "collab10",
			imgUrl: "assets/collab/collab10.png",
			targetUrl: "blank",
		},
		{
			name: "collab11",
			title: "collab11",
			imgUrl: "assets/collab/collab11.png",
			targetUrl: "blank",
		},
		{
			name: "collab12",
			title: "collab12",
			imgUrl: "assets/collab/collab12.png",
			targetUrl: "blank",
		},
	];

	indexContentData.forEach((content) => {
		const contentContainer = document.getElementById(`${content.target}`);
		contentContainer.innerText = content.content;
	});

	const container = document.getElementById("collab-list");
	collabData.forEach((collab) => {
		const item = document.createElement("div");
		item.classList.add("col-2");

		const anchor = document.createElement("a");
		anchor.href = collab.targetUrl;
		anchor.classList.add("mt-3", "text-center");
		item.appendChild(anchor);

		const divImg = document.createElement("div");
		divImg.classList.add("mb-1");
		anchor.appendChild(divImg);

		const image = document.createElement("img");
		image.src = collab.imgUrl;
		image.classList.add("collab-img");
		image.title = collab.title;
		divImg.appendChild(image);

		const textOver = document.createElement("div");
		textOver.classList.add("text-over", "text-center");
		textOver.innerText = collab.name;
		item.appendChild(textOver);

		container.appendChild(item);
	});
};
