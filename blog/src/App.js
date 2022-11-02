// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'; 
import {useState} from "react"; 
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // css 추가해주는 문장. 얘 없으면 css 안돌아감 

function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);

  const array_sort = () => {
    let arr = [...title]; 
    arr = arr.sort(); 
    setTitle(arr)
  }

  const onClick_sort = () => {
    if(title[0] === "남자 코트 추천") { 
      setTitle(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
    if(title[0] === "여자 코트 추천") {
      setTitle(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
    array_sort(); 
  } 
  // Problem 4 

  const onClick_copy = () => {
    if(title[0] === "남자 코트 추천") { 
      setTitle(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
    if(title[0] === "여자 코트 추천") {
      setTitle(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
    if(title[0] === "강남 우동 맛집" && title[1] === "여자 코트 추천") {
      setTitle(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
    if(title[0] === "강남 우동 맛집" && title[1] === "남자 코트 추천") {
      setTitle(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"])
    }
  }

  // Problem 3

  return (
    <>
    <div className="body">
    <div className="blog_title">
        <p className="blog_header">ReactBlog</p>
    </div>
      {/* <br /> */}
      <div className="blog_body">
        <div className="container">
          <h5 className="body_title">{title[0]}</h5>
          <br /> 
          <p className="body_title">2월 17일 발행</p>
        </div>
        {/* <br /> */}
        <hr></hr>
        <div className="container">
          <h5 className="body_title">{title[1]}</h5>
          <br /> 
          <p className="body_title">2월 17일 발행</p>
        </div>
        {/* <br /> */}
        <hr></hr>
        <div className="container">
          <h5 className="body_title">{title[2]}</h5>
          <br /> 
          <p className="body_title">2월 17일 발행</p>
        </div>
      </div>
      <br />
      <button onClick={onClick_sort}>{title[0]}(정렬용) 
      </button>
          {/* 수정 버튼  */}
      <button onClick={onClick_copy}>{title[0]}(바꾸는용) 
      </button>
    </div>
    </>
  );
}

export default App;
