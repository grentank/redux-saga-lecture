import React from 'react';
import { useState } from 'react';
import {
  Col, Container, Input, Row,
} from 'reactstrap';
import ItemList from './components/ItemList';
import MyInput from './components/MyInput';

function App() {
  return (
    <Container>
      <MyInput />
      <ItemList />
    </Container>
  );
}

export default App;
