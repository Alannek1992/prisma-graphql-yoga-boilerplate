import { meQuery } from "./operations/user";
import client from "./utils/getClient";

test("just example", async () => {
  const response = await client.query({ query: meQuery });
  expect(response.data.me.nickname).toBe("alannek");
});
