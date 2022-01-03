
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   backgroundColor: '#3c6e71',
  //   color: 'white',
  //   fontSize: 16,

  // },
  // header: {
  //   backgroundColor: '#83c5be',
  //   width: '100%',
  //   padding: 15,

  // },
  // title: {
  //   color: 'white',
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // content: {
  //   alignItems: 'center',
  //   flex: 1,


  // },
  // form: {
  //   alignItems: 'center',
  //   flex: 1,
  //   flexDirection: 'column',


  // },
  // btnContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // box: {
  //   width: '40%',
  //   height: 50,
  //   backgroundColor: '#8ecae6',
  //   marginVertical: 10,
  //   marginHorizontal: 20,
  //   borderRadius: 10,
  //   elevation: 12,
  //   textAlign: 'center',

  // },
  // boxText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   padding: 10,
  //   color: 'white',
  // },
  // inputView: {
  //   position: 'absolute',
  //   bottom: 10,
  //   backgroundColor: 'white',
  //   padding: 10,
  //   fontSize: 20,
  //   width: '70%',
  //   borderRadius: 10,
  //   fontSize: 18,
  //   marginTop: 20,


  // },
  // placeTexColr: {
  //   color: 'lightgrey',
  // },
  // inputText: {
  //   color: 'black',
  //   fontSize: 20,

  // },
  // btn: {
  //   backgroundColor: '#2a9d8f',
  //   color: 'white',
  //   padding: 10,
  //   marginVertical: 20,
  //   marginHorizontal: 10,
  //   borderRadius: 10,
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   elevation: 10,
  // }











  // ************ new todo *************************




  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWraper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'lightgrey',
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    maxWidth: '80%',

  },
  circular: {
    width: 18,
    height: 18,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'pink',
  },


  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input: {
    padding:20,
    backgroundColor:'#fff',
    width:250,
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper: {
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:50,
    borderColor:'#C0C0C0',
    borderWidth:1,


  },
  addText: {},

})