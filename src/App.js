import React, {useState} from 'react';
import styled from 'styled-components';
import {Tabs} from 'antd';
import CreateForm from './components/CreateForm';
import DisplayForm from './components/DisplayForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  align-self: center;
`;

const App = () => {
    const [formData, setFormData] = useState([]);
    return (
        <Container>
            <Title>Difftone Home Assignment</Title>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Create form" key="1">
                    <CreateForm {...{formData, setFormData}} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Display form" key="2">
                    <DisplayForm {...{formData}} />
                </Tabs.TabPane>
            </Tabs>
        </Container>
    )
}
export default App;
