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
      email: true,
      firstName: true,
      lastName: true,
    },
  });
  console.log(response);
};
insertUser("damodar3@gmail.com", "password", "Damodar", "Patil");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

const updateUser = async (
  email: string,
  { firstName, lastName }: UpdateParams
) => {
  const response = await prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(response);
};
updateUser("damodar@gmail.com", {
  firstName: "Moon",
  lastName: "Due",
});

const getUser = async (email: string) => {
  const response = await prisma.user.findFirst({
    where: { email },
  });
  console.log(response);
};
getUser("damodar1@gmail.com");
