import React from "react";

const MainPage = () => {
  return (
    <div className="bg-green-100">
      <div className="p-4 ">
        <h2 className="font-semibold text-2xl text-center pb-10">
          Personal Information
        </h2>
        <div className="text-center bg-green-200 mx-auto max-w-md p-5 rounded-2xl">
          <p>
            <strong>Name:</strong> Dinesh S
          </p>
          <p>
            <strong>Age:</strong> 26
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:dineshinmecheng@gmail.com">
              {" "}
              dineshinmecheng@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:7305504500"> 7305504500 </a>
          </p>
          <div className=" justify-center">
            <strong>Skills :</strong>
            <ul className="mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>GitHub</li>
            </ul>
          </div>
          <strong>
            <h2 className="pb-2 pt-2">Education :</h2>
          </strong>
          <h3>Mechanical Engineering</h3>
          <p>King College of Technology - 2014-2018</p>
          <br />
          <h3>H.S.C (Computer Science Stream)</h3>
          <p>P.G.P Matric Higher Secondary School</p>
          <br />
          <h3>S.S.L.C (State-Board)</h3>
          <p>P.G.P Matric Higher Secondary School</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
