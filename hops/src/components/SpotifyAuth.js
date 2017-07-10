import { NativeModules } from 'react-native';

//Assign our module from NativeModules and assign it to a variable
var SpotifyAuth = NativeModules.SpotifyAuth;

class yourComponent extends Component {
	//Some code ...
	someMethod(){
    //You need this to Auth a user, without it you cant use any method!
		SpotifyAuth.setClientID('Your ClientId','Your redirectURL', ['streaming'], (error)=>{
        if(error){
          //handle error
        } else {
          //handle success
        }
      });
	}
}