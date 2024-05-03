import './App.css';
import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  { id: 'g1', text: '리액트 컴포넌트 스타일 마스터하기' },
  { id: 'g2', text: 'UI 프로그래밍 고수 되기' },
];

// const App = () => {};
function App() {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // Input에게 전달할 함수
  const addCoalHandler = (text) => {
    // console.log('전달받은 텍스트: ', text);
    const newGoal = {
      id: Math.random().toString(),
      text,
    };

    // 상태변수(배열) 수정
    // setGoals([...goals, newGoal]);
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const deleteGoalHandler = (id) => {
    // const updateGoals = [...goals];
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1);
    // setGoals(updateGoals);

    //const updateGoals = goals.filter((goal) => goal.id !== id);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // CourseList 조건부 렌더링
  let listContent = (
    <p style={{ color: 'red', fontSize: '2em', textAlign: 'center' }}>
      목표를 등록해 주세요!
    </p>
  );

  if (goals.length > 0) {
    listContent = <CourseList items={goals} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addCoalHandler} />
      </section>
      <section id="goals" onClick={deleteGoalHandler}>
        {listContent}
      </section>
    </div>
  );
}

export default App;
