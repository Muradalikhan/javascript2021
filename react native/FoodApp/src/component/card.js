import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://buffer.com/library/content/images/library/wp-content/uploads/2018/11/free-images-social.png' }} />
    <Card.Actions>
      <Button>Add</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyCard;