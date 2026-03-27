import axios from "axios";

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "55038104-4ff7c993e1add1fdeb38abc54",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return {
      images: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    console.log(error);
return { images: [], totalHits: 0 };
  }
}
