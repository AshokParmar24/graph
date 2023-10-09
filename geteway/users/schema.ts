import { user } from "./type/userType";
import users from "../../database/model/user";
import { GraphQLNonNull } from "graphql";
import { CreateUserInput } from "./type/CreateUserInput";
import { UsersConnection } from "./type/userconnection";
import createUserPayload from "./type/createUserPayload";
import bcrypt from "bcryptjs";
import { singInUserInput } from "./singInUser/singInUserInput";
import { singInUserPayload } from "./singInUser/singInUserPayload";
import jwt from "jsonwebtoken";
import { verifySignupTokenPayload } from "./type/verifySignupTokenPayload";
import { verifySignupTokenInput } from "./type/verifySignupTokenInput";
import { get } from "http";

export const userType = [user];
export const userQueries = {
  listUsers: {
    type: UsersConnection,
    resolve: async () => {
      const userLength = await users.aggregate([
        {
          $lookup: {
            from: "companys",
            localField: "companyId",
            foreignField: "_id",
            as: "companyInfo",
          },
        },
      ]);
      return {
        companyInfo: userLength,
      };
    },
  },
};
export const createOneUser = async (args) => {
  const { input } = args;
  const emailAvailable = await users.findOne({ email: input.email });
  if (emailAvailable) {
    return {
      error: "This email is already exist",
    };
  }
  const hashPassword = await bcrypt.hash(input.password, 12);
  const newUser = await new users({ ...input, password: hashPassword });
  console.log("newUser", newUser);
  await newUser.save();
  return {
    isSuccess: true,
  };
};
export const userMutations = {
  createUser: {
    type: createUserPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateUserInput),
      },
    },
    resolve: (_parent, args) => createOneUser(args),
  },
  singInUser: {
    type: singInUserPayload,
    args: {
      input: {
        type: new GraphQLNonNull(singInUserInput),
      },
    },
    resolve: async (parent, args) => {
      const { email, password } = args.input;
      const currentUser = await users.findOne({ email: email });

      const checkPasswordMatch = await bcrypt.compare(
        password,
        currentUser?.password
      );

      const payload = {
        email: currentUser?.email,
        password: currentUser?.password,
        name: currentUser?.name,
      };

      const tokenSign = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      if (!checkPasswordMatch) {
        return {
          error: "check you email password does not match",
        };
      }
      return {
        isSuccess: true,
        token: tokenSign,
      };
    },
  },
  verifySignupToken: {
    type: verifySignupTokenPayload,
    args: {
      input: {
        type: verifySignupTokenInput,
      },
    },
    resolve: (res, args) => {
      console.log("argsargs", args);

      const { token } = args.input;
      const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log("currentUser", currentUser);
      if (currentUser) {
        return { isSuccess: true };
      } else {
        return { isSuccess: false };
      }
    },
  },
};

export default { userQueries, userMutations };
