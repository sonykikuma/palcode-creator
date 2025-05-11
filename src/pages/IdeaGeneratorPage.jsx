// src/pages/IdeaGeneratorPage.jsx
import { useState, useCallback } from "react";
import { generateVideoIdea } from "../utils/openai";
import debounce from "lodash.debounce";

const IdeaGeneratorPage = ({ setPublishedVideos, publishedVideos }) => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Funny");
  const [type, setType] = useState("Short-form");
  const [idea, setIdea] = useState("");
  // const [publishedIdeas, setPublishedIdeas] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounced handleGenerate function to limit how often API is called
  const debouncedGenerate = useCallback(
    debounce(async () => {
      setLoading(true);
      setError("");
      try {
        const result = await generateVideoIdea(topic, tone, type);
        setIdea(result);
      } catch (err) {
        setError("Failed to generate content.");
      } finally {
        setLoading(false);
      }
    }, 2000), // Set debounce time to 2 seconds (adjustable)
    [topic, tone, type]
  );

  // Trigger debouncedGenerate when the button is clicked
  const handleGenerate = () => {
    if (loading) return; // Prevent clicking if request is in progress

    debouncedGenerate();
  };

  // const handleGenerate = async () => {
  //   setLoading(true);
  //   setError("");
  //   try {
  //     setTimeout(async () => {
  //       const result = await generateVideoIdea(topic, tone, type);
  //       setIdea(result);
  //     }, 1000); // Delay for 1 second
  //   } catch (err) {
  //     setError("Failed to generate content.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handlePublish = () => {
    const newVideo = {
      id: Date.now(),
      topic,
      tone,
      type,
      content: idea,
      status: "Published",
      views: Math.floor(Math.random() * 1000), // fake analytics
    };
    setPublishedVideos((prev) => [...prev, newVideo]);
    setIdea("");

    // if (idea) {
    //   setPublishedIdeas((prev) => [...prev, idea]);
    //   setIdea(""); // Clear current idea after publishing
    // }
  };

  return (
    <>
      {" "}
      <h2 className="text-center">Welcome to VideoAI</h2>
      <div className="mt-4 p-4 shadow-lg">
        <h3>Generate Video Idea</h3>
        <div className="mb-3 ">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topic"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select
            onChange={(e) => setType(e.target.value)}
            className="form-control"
          >
            <option value="Short-form">Short-form</option>
            <option value="Long-form">Long-form</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            placeholder="Tone"
            className="form-control"
          />
        </div>
        <button onClick={handleGenerate} disabled={loading}>
          Generate
        </button>

        {loading && <p>Generating...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {idea && (
          <div className="preview-box">
            <h5>Preview:</h5>
            <p>{idea}</p>
            <button onClick={handlePublish}>Publish</button>
          </div>
        )}
        {publishedVideos?.length > 0 && (
          <div className="mt-4">
            <h4>Published Ideas</h4>
            <ul className="list-group">
              {publishedVideos.map((video) => (
                <li key={video.id} className="list-group-item">
                  <strong>{video.topic}</strong> - {video.tone} - {video.type}
                  <br />
                  <small>{video.content}</small>
                  <div>
                    Status: {video.status} | Views: {video.views}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default IdeaGeneratorPage;
