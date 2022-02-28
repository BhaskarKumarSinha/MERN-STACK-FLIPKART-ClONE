import products from "../model/productSchema.js";

export const getProducts = async () => {
  try {
    const product = await products.find();
    response.json(product);
  } catch (error) {
    console.log("Error", error.message);
  }
};
export const getProductById = async (request, response) => {
  try {
    console.log("Hie");
    const individualData = await products.findOne({ id: request.params.id });
    response.json(individualData);
  } catch (error) {
    console.log("error", error.message);
  }
};
