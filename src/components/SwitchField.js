import React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 12px 0;
`

const SwitchField = ({onUpdate}) => (
    <Container>
        <StyledInput className='req_input' placeholder="Please enter switch label" onChange={({target: {value}}) => onUpdate('label', value)} />
    </Container>
)

export default SwitchField;
