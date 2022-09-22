import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Input, Row } from 'reactstrap';
import { fetchEntries, fetchEntriesThunk } from '../redux/actions/entriesActions';

export default function MyInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntries(input));
    // const id = setTimeout(() => {
    //   dispatch(fetchEntriesThunk(input));
    // }, 1000);
    // return () => clearTimeout(id);
  }, [input]);
  return (
    <Row>
      <Col>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </Col>
    </Row>
  );
}
