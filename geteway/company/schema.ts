import { company } from "./type/companyType";
import { GraphQLID, GraphQLNonNull } from "graphql";
import { createCompanyInput } from "./type/createCompanyInput";
import { companySuccess } from "./type/companySuccess";
import companys from "../../database/model/company";
import { userConnection } from "./type/userConnection";
import { updateCompanyInput } from "./type/updateCompanyInput";
import { updateCompanyPayload } from "./type/updateCompanyPayload";
import { companyDeletePayload } from "./type/companyDeletePayload";
import { deleteCompanyInput } from "./type/deleteCompanyInput";
export const companyTypes = [company];

export const companyQuery = {
  companyList: {
    type: userConnection,
    resolve: async (id, args, context) => {
      const token = await context?.req?.headers?.authorization;
      console.log("00000000000000",token)
      const companyList = await companys.find();
      return {
        data: companyList,
      };
    },
  },
};

export const companyMutations = {
  createCompany: {
    type: companySuccess,
    args: {
      input: {
        type: new GraphQLNonNull(createCompanyInput),
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const newCompany = await new companys(input);
      await newCompany.save();
      return {
        company: newCompany,
      };
    },
  },
  updateCompany: {
    type: updateCompanyPayload,
    args: {
      input: {
        type: new GraphQLNonNull(updateCompanyInput),
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const companyData = await companys.findOne({ _id: input.id });

      if (!companyData) {
        return { company: null, errors: "goood morning" };
      }
      const updateCompany = await companys.findOneAndUpdate(
        { _id: companyData.id },
        input
      );
      if (updateCompany) {
        return {
          company: await companys.findOne({ _id: input.id }),
        };
      } else {
        return {
          company: updateCompany,
        };
      }
    },
  },
  deleteCompany: {
    type: companyDeletePayload,
    args: {
      input: {
        type: deleteCompanyInput,
      },
    },
    resolve: async (_parent, args) => {
      const { input } = args;
      const user = await companys.findOne({ _id: input.id });
      if (!user) {
        return { errors: "user not exist" };
      }
      await companys.findByIdAndDelete({ _id: input.id });
      return {
        id: input.id,
      };
    },
  },
};
