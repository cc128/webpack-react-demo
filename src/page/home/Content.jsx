import React from "react";
import { get_entry_by_rank } from "../../req";
import { getTimeSpan } from "../../tool/tool.js";

export default class Content extends React.Component {
  state = {
    cont: []
  };

  componentDidMount() {
    // https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=
    get_entry_by_rank({
      params: {
        src: "web",
        limit: "20",
        category: "5562b415e4b00c57d9b94ac8"
      }
    }).then(res => {
      if (res.m === "ok") {
        this.setState({
          cont: [...res.d.entrylist]
        });
      }
    });
  }
  render() {
    return (
      <div className="content">
        {this.state.cont.map(D => {
          return (
            <div className="article_list" key={D.objectId}>
              <div className="meta_list">
                <span style={{ color: "red" }}>
                  {D.collectionCount >= 100 ? "热 · " : ""}
                </span>
                <span style={{ color: "#b71ed7" }}>专栏 · </span>
                <span style={{ color: "#c8c8c8" }}>{D.user.username} · </span>
                <span style={{ color: "#c8c8c8" }}>
                  {getTimeSpan(
                    Math.round(new Date(D.createdAt).getTime()),
                    true
                  )}
                </span>
                <span style={{ color: "#c8c8c8" }}>
                   · 
                  {/* {D.tags[0].title} {D.tags[1] ? " / " + D.tags[1].title : ""} */}
                  {D.tags.map(e => {
                    return <span key={e.id}>{"/" + e.title}</span>;
                  })}
                </span>
              </div>
              <div className="info_title">{D.title}</div>
              <div className="info_number">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPkNBQ0Y5MUY0LTc2RUItNDFENS1CRjZELTdCNTBGNUY4NjUwNTwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHk9IjU0IiB3aWR0aD0iNjAiIGhlaWdodD0iMjUiIHJ4PSIxIi8+PG1hc2sgaWQ9ImIiIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNSIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgLTU2KSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIHN0cm9rZT0iI0VERUVFRiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0xOS4wNSA2Mi43OTdjLS4yMDgtLjI2OC0xLjc3Ni0yLjE4OC0zLjYyOS0xLjcyNS0uNjYyLjE2NS0xLjQzOS40NC0yLjAwOSAxLjQ2My0yLjE4IDMuOTEzIDQuOTY1IDguOTgzIDUuNjE1IDkuNDMzVjcybC4wMjMtLjAxNi4wMjMuMDE2di0uMDMyYy42NS0uNDUgNy43OTUtNS41MiA1LjYxNS05LjQzMy0uNTctMS4wMjMtMS4zNDctMS4yOTgtMi4wMDktMS40NjMtMS44NTMtLjQ2My0zLjQyIDEuNDU3LTMuNjI5IDEuNzI1eiIgZmlsbD0iI0IyQkFDMiIvPjwvZz48L3N2Zz4=" />
                {D.collectionCount}
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg==" />
                {D.commentsCount}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
