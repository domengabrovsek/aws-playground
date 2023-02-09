import middleware from "middleware";

export const handler = middleware(async () => {
  console.log('Called from test-one');
  throw new Error("some cool error");
});