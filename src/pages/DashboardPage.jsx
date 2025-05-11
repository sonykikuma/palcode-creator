import { useState } from "react";

const DashboardPage = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredVideos = videos?.filter((video) => {
    const matchesSearch =
      video.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || video.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container">
      <h3>Content Dashboard</h3>

      <div className="d-flex gap-3 my-3">
        <input
          className="form-control"
          placeholder="Search by topic or idea..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Type</th>
            <th>Tone</th>
            <th>Status</th>
            <th>Views</th>
            <th>Idea</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredVideos?.map((video) => (
            <tr key={video.id}>
              <td>{video.topic}</td>
              <td>{video.type}</td>
              <td>{video.tone}</td>
              <td>
                <span
                  className={`badge bg-${
                    video.status === "Published"
                      ? "success"
                      : video.status === "Draft"
                      ? "secondary"
                      : "danger"
                  }`}
                >
                  {video.status}
                </span>
              </td>
              <td>{video.views}</td>
              <td>{video.content}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
