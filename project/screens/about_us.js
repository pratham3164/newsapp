import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import Appbar from '../components/appbar';

export default class about_us extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    var view = this.state.show ? (
      <View>
        <Text style={{textAlign: 'center', fontSize: 16}}>
          CopperCodes provides a wide range of Information Technology services
          desired for business productivity. From Web Development, Web
          Designing, Mobile App Development to Software Development. Founded in
          2017 our focus is to provide complete information technology services
          for personal and business needs and help them grow. We employ a
          skilled professional team of developers to achieve the quality work we
          promise. Our Web Development and Designing team consist of skilled
          engineers and designers who have gained expertise in making PC and
          Mobile responsive Web designs. As a Mobile App Development Company, we
          develop responsive Mobile App architectures yet materialized designs.
          We cover both Android and iOS app development in our mobile app
          development services. Softwares are important for increasing the pace
          of productivity in any company. We develop software which are accurate
          and bug-free. We also give post-development support if there are any
          bugs or errors in the delivered projects. We assign a special team for
          Software Development and produce products that will actually help our
          clients ease out their processes with the latest technologies
          available. Our Developers are specialized in Software Development
          languages like Python, Java, Node.js, PHP, HTML etc.
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({show: false});
          }}>
          <FontAwesome5Icon
            name="angle-up"
            style={{
              padding: 1,
              alignSelf: 'center',
            }}
          />
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
            See Less
          </Text>
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() => {
          this.setState({show: true});
        }}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Know More
        </Text>
        <FontAwesome5Icon
          name="angle-down"
          style={{
            padding: 1,

            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
    return (
      <View style={{flex: 1}}>
        <View>
          <Appbar
            navigate={() => this.props.navigation.openDrawer()}
            title="ABOUT US"
            icon="arrow-left"
          />
        </View>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              padding: 10,
              margin: 4,
            }}>
            <FontAwesome5Icon
              name="laptop"
              size={30}
              style={{
                padding: 3,
                margin: 4,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{alignSelf: 'center', fontSize: 40, fontWeight: 'bold'}}>
              <Text style={{color: 'orange'}}>Copper</Text>Codes
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                margin: 3,
              }}>
              We convert your ideas into business.
            </Text>
            <View style={{margin: 2}}>
              <Text style={{textAlign: 'center', fontSize: 16}}>
                It's always better to make someone laugh than to tell that
                you're funny. So we let our work do the talking.
              </Text>
            </View>
            <View style={{padding: 5, margin: 5}}>
              <Text
                style={{textAlign: 'center', fontSize: 16, color: 'orange'}}>
                CopperCodes is a Web Development, Mobile App Development and a
                Software Development company.
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>{view}</View>
          </View>
          <View
            style={{
              padding: 8,
              margin: 3,
            }}>
            <Text style={{textAlign: 'center', fontSize: 15}}>
              This is an demo app. Developeed as part of our internship
              @CopperCodes, Miramar-Goa. Created using openSource api
              @newsapi.org .Not a market product
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            padding: 6,
            margin: 3,
          }}>
          <Text
            onPress={() => Linking.openURL('https://www.coppercodes.com')}
            style={{color: 'orange', fontSize: 15}}>
            Visit Our Website
          </Text>
        </View>
      </View>
    );
  }
}
