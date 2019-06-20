import React from 'react';
import ChatsNavbar from './ChatsNavbar';
import ChatsList from './ChatsList';
import AddChatButton from './AddChatButton';
import styled from 'styled-components';
import { History } from 'history';


const Container = styled.div`
  height: 100vh;
`;
interface ChatsListScreenProps {
  history: History;
}
const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ history }) => (
  <Container>
    <ChatsNavbar history={history}/>
    <ChatsList history={history} />
    <AddChatButton history={history} />
  </Container>
);

export default ChatsListScreen;
