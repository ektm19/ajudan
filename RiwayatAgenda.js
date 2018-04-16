import React, { Component } from 'react';
import { ListItem, Icon, List, View, FlatList, RefreshControl, ActivityIndicator, Alert} from 'react-native';
import { Title, Button, Left, Container, Header, Content, Card, CardItem, Text, Body, Thumbnail } from 'native-base';

export default class CardHeaderFooterExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
         loading: false,
         data: [],
         error: null,
         refreshing: false,
         ActivityIndicator_Loading: false,
         loading: 'true'
        };
       }
       componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
         this.setState({ refreshing: true });
         const url = 'http://mhs.rey1024.com/appmobile/A1615051070/getData.php';
         //this.setState({ loading: true });
         fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
           console.log("comp");
           console.log(responseJson);
           this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false,
      
           });
          }
          );
        });
       }
       async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
           <Body>
           <Button full>
          <Title style={{paddingTop:10,fontWeight:'bold',paddingRight:0}} >
          My-Ajudan</Title>
          </Button>
          </Body>
            </Header>
            <View style ={{flex: 1}}>
            <View>
     {
      this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'/> : null
     }
     <FlatList
      refreshControl={
        <RefreshControl
         refreshing={this.state.refreshing}
         onRefresh={this.componentDidMount.bind(this)}
        />
       }
      data={this.state.data}
      keyExtractor={item=>item.id}
      renderItem={({ item }) =>
       <Card>
        <CardItem>
         <Left>
         <Thumbnail square size={80} source={require('./src/img/document.png')} />
         <Body>
         <Text style={{fontWeight:'bold'}} >Tanggal : {item.tgl}</Text>
         <Text style={{fontWeight:'bold'}} >Jam   : {item.waktu}</Text>
         <Text style={{fontWeight:'bold'}} >Agenda : {item.agenda}</Text>
        
         </Body>
         </Left>
        </CardItem>
       </Card>
      }
     />
    </View>
            </View>
        </Container>
    );
  }
}