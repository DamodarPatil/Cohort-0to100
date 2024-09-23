"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = (email, password, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.user.create({
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
});
insertUser("damodar4@gmail.com", "password", "Damodar", "Patil");
const updateUser = (email_1, _a) => __awaiter(void 0, [email_1, _a], void 0, function* (email, { firstName, lastName }) {
    const response = yield prisma.user.update({
        where: { email },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(response);
});
updateUser("damodar@gmail.com", {
    firstName: "Moon",
    lastName: "Due",
});
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.user.findFirst({
        where: { email },
    });
    console.log(response);
});
getUser("damodar1@gmail.com");
