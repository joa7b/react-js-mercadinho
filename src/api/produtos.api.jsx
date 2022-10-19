
const baseURL = 'https://mercadinho.herokuapp.com'

const productsApi = {
  getAllProducts: async () => {
    try {
      const Alldata = await fetch(`${baseURL}/produtos`);
      const Allresponse = await Alldata.json();
      return Allresponse;
    } catch (err) {
      console.log(err);
    }
  },

  getByIdProducts: async (id) => {
    try {
      const dataById = await fetch(
        `${baseURL}/produtos/${id}`
      );
      const responseById = await dataById.json();
      return responseById;
    } catch (err) {
      console.log(err);
    }
  },

  createProduct: async (product) => {
    try {
      const dataPost = await fetch(
        `${baseURL}/produtos/create`,
        product
      );
      const responsePost = await dataPost.json();
      return responsePost;
    } catch (err) {
      console.log(err);
    }
  },
};

export default productsApi;
