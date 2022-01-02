import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screen/Feed';
import Article from '../screen/Article';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}