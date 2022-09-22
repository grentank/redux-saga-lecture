import React from 'react';
import {
  ListGroup, ListGroupItem, Row,
} from 'reactstrap';
import { useSelector } from 'react-redux';

export default function ItemList() {
  const entries = useSelector((state) => state.entries);
  return (
    <Row>
      <ListGroup>
        {entries?.map((entry) => (
          <ListGroupItem key={entry.id}>
            {entry.id}
            {' '}
            {entry.body}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Row>
  );
}
