export const Query = {
  async me(parent, args, { prisma }, info) {
    return {
      id: "id123",
      email: "test@test.com",
      nickname: "alannek",
      password: "123456"
    };
  }
};
