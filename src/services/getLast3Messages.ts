import prismaClient from "../prisma";

class getLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    return messages;
  }
}

export { getLast3MessagesService };
