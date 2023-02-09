import { getRandomCatFacts } from "/opt/nodejs/common/services/service-two";

export const handler = async (event: any) => {

  const response = await getRandomCatFacts();

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
}