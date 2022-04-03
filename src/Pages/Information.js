import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Information = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `http://127.0.0.1:8000/api/student_courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(result.data);
      console.log(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Information;
