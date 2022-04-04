import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <div>
      <article>
        <h1
          style={{
            display: "inline-block",
            marginLeft: "20px",
            color: "rgb(36, 36, 80)",
            fontSize: "40px",
          }}
        >
          Some of the answers for bonus marks:- <hr />{" "}
        </h1>
        <div>
          <h1>Q-1) What is context API?</h1>
          <p>
            As we know that in React we can only share data unidirectionally by
            props. But context API allows us to share data globally. This is the
            alternative of prop drilling. Means we can share data from
            Grandparent to child to Parent. By React Context API we can
            effectively produce global variables that can be passed around.
          </p>
        </div>
        <div>
          <h1>Q-2) What is symantic tag?</h1>
          <p>
            In HTML symantic tag means meaningful tag that describe the element
            best. Symantic tags are both human and machine readable. In the
            early stage of internet developers used to use div tags for most of
            the element. Which was hard to understand. But in symantic tag
            anyone can understand what is written. Some symantic tags are :
            section, aside,nav,summary etc.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
