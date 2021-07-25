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

const InputField = ({onUpdate}) => (
    <Container>
        <StyledInput className='req_input' placeholder="Please enter input label" onChange={({target: {value}}) => onUpdate('label', value)} />
    </Container>
)

export default InputField;
