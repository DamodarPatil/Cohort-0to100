import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const response = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log(response);
};
