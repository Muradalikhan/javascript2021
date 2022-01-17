import { message, Button, Space } from 'antd';

const success = () => {
    message.success('News have been saved!');
};

const error = () => {
    message.error('This is an error message');
};

const warning = () => {
    message.warning('This is a warning message');
};





export {success,error,warning}