import axios from "axios";
export function getImagesByQuery(query) { 
return axios.get("https://pixabay.com/api/", {
	params: {
		key: "55038104-4ff7c993e1add1fdeb38abc54",
		q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true

	}
})
.then(response => { return response.data.hits})
.catch(error => {console.log(error)});
}