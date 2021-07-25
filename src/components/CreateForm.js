import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button, Radio, notification, Divider} from 'antd';
import InputField from './InputField'
import SelectField from './SelectField'
import SwitchField from './SwitchField'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CreateForm = ({formData, setFormData}) => {
    const [demoData, setDemoData] = useState(formData);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const elements = document.getElementsByClassName('req_input');
        setIsValid(Array.from(elements).every((e) => !!e.value) && demoData.every(({type}) => !!type))
    }, [demoData])

    const onFinish = useCallback(() => {
        notification.success({
            message: 'Form updated!',
            description: 'You can view it on "Display form" tab.',
        })
        setFormData(demoData);
    }, [setFormData, demoData]);

    const onTypeChange = useCallback((type, index) => {
        const newFormData = [...demoData];
        newFormData[index] = ({type, options: {items: []}});
        setDemoData(newFormData);
    }, [demoData, setDemoData]);

    const onOptionsChange = useCallback((key, value, index) => {
        const newFormData = [...demoData];
        newFormData[index].options[key] = value;
        setDemoData(newFormData);
    }, [demoData, setDemoData]);

    const onItemUpdate = useCallback((item, index) => {
        const newFormData = [...demoData];
        newFormData[index].options.items[item.index] = ({label: item.value, value: item.value});
        setDemoData(newFormData);
    }, [demoData, setDemoData]);

    return (
        <Container>
            {demoData.map(({type, options}, index) => (
                <div key={index}>
                    <Radio.Group  onChange={({target: {value}}) => onTypeChange(value, index)}>
                        <Radio value={'input'}>Input field</Radio>
                        <Radio value={'select'}>Select field</Radio>
                        <Radio value={'switch'}>Switch field</Radio>
                        {type === 'input' && <InputField onUpdate={(key, value) => onOptionsChange(key, value, index)} />}
                        {type === 'switch' && <SwitchField onUpdate={(key, value) => onOptionsChange(key, value, index)} />}
                        {type === 'select' && <SelectField
                            onUpdate={(key, value) => onOptionsChange(key, value, index)}
                            onItemUpdate={(item) => onItemUpdate(item, index)}
                        />}
                    </Radio.Group>
                    <Divider />
                </div>
            ))}
            <Button onClick={() => setDemoData([...demoData, {type: null, options: {items: []}}])}>
                Add field
            </Button>
            <Divider />
            <Button type="primary" onClick={onFinish} disabled={!demoData.length || !isValid}>
                Update Form
            </Button>
        </Container>
    )
}

export default CreateForm;
