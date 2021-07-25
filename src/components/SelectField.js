import React, {useState} from 'react';
import styled from 'styled-components';
import {Input, Select} from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 12px 0;
`

const SwitchField = ({onUpdate, onItemUpdate}) => {
    const [numOfItems, setNumOfItems] = useState(4)
    return (
        <Container>
            <StyledInput className='req_input' placeholder="Please enter select label" onChange={({target: {value}}) => onUpdate('label', value)} />
            <Select defaultValue={numOfItems} onChange={setNumOfItems}>
                {Array.from({length: 10}).map((_, i) => <Select.Option key={i} value={i + 1}>{i + 1}</Select.Option>)}
            </Select>
            {Array.from({length: numOfItems}).map((_, i) => (
                <StyledInput key={i} className='req_input' placeholder={`Please enter item ${i + 1}`} onChange={({target: {value}}) => onItemUpdate({index: i, value})} />
            ))}
        </Container>
    )
}

export default SwitchField;
