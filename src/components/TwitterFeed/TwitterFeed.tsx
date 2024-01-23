// components/TwitterFeed.tsx
import React, { useState, useEffect } from "react";
import { Tweet, TweetsApiResponse } from "../../types";

const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await fetch("/api/twitter");
        const data: TweetsApiResponse = await res.json();
        setTweets(data.data || []);
        loadTwitterScript();
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [tweets]);

  const loadTwitterScript = () => {
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  return (
    <div>
      <h2>Twitter Feed</h2>
      {tweets.map((tweet: Tweet) => (
        <div key={tweet.id} className="tweet-embed">
          <blockquote className="twitter-tweet">
            <a href={`https://twitter.com/user/status/${tweet.id}`}></a>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default TwitterFeed;
