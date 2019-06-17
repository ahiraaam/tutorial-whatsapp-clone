import { GraphQLDateTime } from 'graphql-iso-date';
import { chats, messages } from '../db';
const resolvers = {
  Date: GraphQLDateTime,
  Chat: {
    messages(chat: any) {
      return messages.filter(m => chat.messages.includes(m.id));
    },
    lastMessage(chat: any) {
      const lastMessage = chat.messages[chat.messages.length - 1]; //adquiere el ID
      return messages.find(m => m.id === lastMessage); //si es el mismo ID
    },
  },

  Query: {
    chats() {
      return chats;
    },
    chat(root: any, { chatId }: any) {
      return chats.find(c => c.id === chatId);
    },
  },
};
export default resolvers;