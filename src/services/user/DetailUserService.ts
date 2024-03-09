import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id:string){
        const userClient = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return userClient;
    }
}

export {DetailUserService}