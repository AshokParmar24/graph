import { productType } from "./type/productType";
import { createProductPayload } from "./type/createProductPayload";
import { createProductInput } from "./type/createProductInput";
import { GraphQLNonNull } from "graphql";
import product from "../../database/model/product";
import { updateProductPayload } from "./productUpdate/updateProductPayload";
import { updateProductInput } from "./productUpdate/updateProductInput";
import { deleteProductPayload } from "./productDeleteType/deleteProductPayload";
import { deleteProductInput } from "./productDeleteType/deleteProductInput";
import { getAllProductPayload } from "./getAllProduct/getAllProductInput";

export const productTypes = [productType];

export const productQuery = {
  getAllProduct: {
    type: getAllProductPayload,
    resolve: async () => {
      const datafsd = await product.find();
      return {
        data: datafsd,
      };
    },
  },
};

export const productMutations = {
  createProduct: {
    type: createProductPayload,
    args: {
      input: {
        type: new GraphQLNonNull(createProductInput),
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const newProduct = await new product(input);
      await newProduct.save();
      return {
        isSuccess: true,
      };
    },
  },
  updateProduct: {
    type: updateProductPayload,
    args: {
      input: {
        type: new GraphQLNonNull(updateProductInput),
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const productData = await product.findOne({ _id: input.id });

      if (!productData) {
        return {
          error: "product id does not match",
        };
      }
      const updateData = await product.findOneAndUpdate(
        { _id: productData.id },
        input
      );
      return {
        updateProduct: updateData,
        isSuccess: true,
      };
    },
  },
  deleteProduct: {
    type: deleteProductPayload,
    args: {
      input: { type: new GraphQLNonNull(deleteProductInput) },
    },
    resolve: async (_, args) => {
      const { input } = args;
      const availabeData = await product.findOne({ _id: input.id });
      if (!availabeData) {
        return {
          error: "product not exist",
        };
      }
      await product.findOneAndDelete({ _id: availabeData.id });
    },
  },
};
