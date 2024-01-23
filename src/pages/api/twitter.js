// pages/api/twitter.js
import needle from "needle";

const token = process.env.TWITTER_BEARER_TOKEN; // Set your Twitter Bearer Token in .env file

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const params = {
        query: "OP_CAT -is:retweet", // Search query
        "tweet.fields": "created_at,author_id", // Fields to return
      };

      const response = await needle(
        "get",
        `https://api.twitter.com/2/tweets/search/recent`,
        params,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.statusCode !== 200) {
        return res.status(500).json({ message: "Error fetching tweets" });
      }

      res.status(200).json(response.body);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};
