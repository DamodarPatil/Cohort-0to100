import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const insertUser = async (
//   email: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) => {
//   const response = await prisma.user.create({
//     data: {
//       email,
//       password,
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       password: true,
//       email: true,
//       firstName: true,
//       lastName: true,
//     },
//   });
//   console.log(response);
// };
// insertUser("damodar3@gmail.com", "password", "Damodar", "Patil");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

const updateUser = async (
  email: string,
  { firstName, lastName }: UpdateParams
) => {
  prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName,
    },
  });
};
updateUser("damodar@gmail.com", {
  firstName: "john",
  lastName: "due",
});
