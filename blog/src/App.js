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
  const [modal, setModal] = useState(false); 
  const [contents, setContents] = useState(["본문1", "본문2", "본문3"]); 
  const [lists, setLists] = useState([]); // 실습 4
  const [inputvalue, inputFunc] = useState(''); // 실습 3-2
  // const blogs = useState([]); 
  let itr = [...title]; 

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

  const onChange = (e) => { 
    inputFunc(e.target.value); 
  }

  const PostTitle = (props) => { 
      return (
        <section>
          <h5>{props.title}</h5>
          <p>{props.contents}</p>
        </section>
      ) 
  }

  const CreateInput = (props) => {
      return (
        <section> 
            <h5>{props.val}</h5>
            <p>{props.contents}</p>
        </section> 
      )
  }

  // function addinput() { 
  //   // e.preventDefault(); 
  //   let arr_lists = [...title];  
  //   arr_lists = arr_lists.concat(inputvalue); 
  //   setTitle(arr_lists);
  //   inputFunc(''); 
  // } 

  // const input_list = lists.map((list) => (
  //   <li
  //     /*고유 key값 주기*/
  //     key={list.id} 
  //     /*더블클릭시 삭제할 이벤트*/
  //     // onClick={() => removeList(list.id)} 
  //   >
  //     {list.text}
  //   </li>
  // ));

  //const removeList = (id) => { 
  //  const about_lists = lists.filter((list) => list.id !== id);
  //  setLists(about_lists);
  //}

  // return 
  return (
    <>
    <div className="body">
    <div className="blog_title">
        <p className="blog_header">ReactBlog</p>
    </div>
    {/* 실습3 start */}
    <div> 
      {/* <input onChange = {((e)=> {console.log(e.target.value)})}/> 실습3-1. */}
      {/* <input onChange = {((e) => inputFunc(e.target.value))}/> */}
      {/* {inputvalue}  */}
      <input className="input-text" type='text' value={inputvalue} onChange={e => inputFunc(e.target.value)}>
      </input>

      <button onClick={() => {
        let input_text = document.querySelector('.input-text'); 
        if(input_text.value != '') {
          let new_arr = [...title]; 
          new_arr.push(input_text.value); 
          setTitle(new_arr); 
        }
      }}>
        글 추가 
      </button>
      
    </div> 
    {/* 실습3 end */}

      <div className="blog_body">
        {
          itr.map(function() {
            return(        
            <div className="container">
            <h5 className="body_title" onClick={ () => {setModal(!modal)}}> 
              {modal ? <PostTitle /> : null} {title[0]}
            </h5>
            <br /> 
            <p className="body_title">2월 17일 발행</p>
            <br />
          </div>)
          })
        }
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
