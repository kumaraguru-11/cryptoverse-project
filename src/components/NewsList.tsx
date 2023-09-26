import React from "react";
import { Feed } from "../app/react-ts-env";
import Card from "react-bootstrap/Card";
import { timeToX } from "../utils/day";

const NewsList = (props: { feeds: [] }) => {
  return (
    <div className="p-2">
      <div className="row">
        {props.feeds.map((feed: Feed, index: number) => (
          <div key={index} className=" p-3 col-md-6 col-sm-6 col-lg-4">
            <a
              href={feed.url}
              target="_blank"
              title={feed.name}
              rel="noreferrer"
              className="text-decoration-none"
            >
              <Card style={{ minWidth: "5rem" }}>
                <Card.Body>
                  <div className="d-flex">
                    <Card.Title className="NewsCard_Title">{feed.name}</Card.Title>
                    <img
                      src={feed.image && feed.image.thumbnail.contentUrl}
                      alt={feed.name}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="d-flex opacity-75 justify-content-between">
                    <Card.Subtitle className="mb-2 text-muted fs-6 my-3 fw-normal">
                      <span>
                        {" "}
                        <i className="bi bi-person mx-2"></i>
                      </span>
                      {feed.provider[0].name}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted fs-6 my-3 fw-normal">
                      <span>
                        {" "}
                        <i className="bi bi-calendar4 mx-2 "></i>
                      </span>
                      {timeToX(feed.datePublished)}
                    </Card.Subtitle>
                  </div>
                  <Card.Text className="my-2">{feed.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
