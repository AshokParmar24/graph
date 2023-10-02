import order from "./type/orderType";
import { GraphQLNonNull } from "graphql";
import { createOrderInput } from "./type/createOderInput";
import { createOderPayload } from "./type/createOderPayload";
import orders from "../../database/model/order";
import { updateOrderPayload } from "./type/updateOrderPayload";
import { updateOrderInput } from "./type/updateOrderInput";
import { deleteOderInput, deleteOderPayload } from "./type/deleteOderPayload";
import { getAllOrderPayload } from "./type/getAllOrderPayload";

export const orderTypes = [order];

export const orderQuery = {
  getAllOrder: {
    type: getAllOrderPayload,
    resolve: async () => {
      const allOrder = await orders.find();
      return { data: allOrder };
    },
  },
};

export const orderMutations = {
  createOder: {
    type: createOderPayload,
    args: {
      input: { type: new GraphQLNonNull(createOrderInput) },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const orderList = (await orders.find()) || [];
      orderList.reverse();
      const serialNumber = orderList.length ? orderList[0].order_number + 1 : 1;
      const newOderData = new orders({ ...input, order_number: serialNumber });
      await newOderData.save();
      return {
        order: newOderData,
      };
    },
  },
  updateOrder: {
    type: updateOrderPayload,
    args: {
      input: {
        type: new GraphQLNonNull(updateOrderInput),
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const orderData = await orders.findOne({ _id: input.id });
      const data = await orders.findOneAndUpdate({ _id: orderData.id }, input);
      return {
        isSuccess: true,
        order: data,
      };
    },
  },
  deleteOder: {
    type: deleteOderPayload,
    args: { input: { type: new GraphQLNonNull(deleteOderInput) } },
    resolve: async (_parent, args) => {
      const { input } = args;
      const orderData = await orders.findOne({ _id: input.id });
      if (!orderData) {
        return {
          error: "order not exist",
        };
      }
      await orders.findOneAndDelete({ _id: input.id });
    },
  },
};
